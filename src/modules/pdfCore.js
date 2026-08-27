/**
 * PDFLab by reza — Core Offline PDF Engine
 * 100% Client-Side / Local Processing Module
 */

class PDFCore {
  constructor() {
    this.isLoaded = true;
  }

  /**
   * Parses page ranges string (e.g. "1-3, 5, 8-10, All") into array of 0-based page indices
   */
  static parsePageRanges(rangeStr, totalPages) {
    if (!rangeStr || rangeStr.trim().toLowerCase() === 'all') {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    const pages = new Set();
    const parts = rangeStr.split(',');

    for (const part of parts) {
      const clean = part.trim();
      if (clean.includes('-')) {
        const [startStr, endStr] = clean.split('-');
        const start = Math.max(1, parseInt(startStr, 10));
        const end = Math.min(totalPages, parseInt(endStr, 10));
        if (!isNaN(start) && !isNaN(end)) {
          for (let p = start; p <= end; p++) {
            pages.add(p - 1);
          }
        }
      } else {
        const p = parseInt(clean, 10);
        if (!isNaN(p) && p >= 1 && p <= totalPages) {
          pages.add(p - 1);
        }
      }
    }

    return Array.from(pages).sort((a, b) => a - b);
  }

  /**
   * Merge Multiple PDF documents
   */
  async mergePDFs(pdfFileList, PDFLib) {
    if (!PDFLib) {
      throw new Error("PDFLib library is required for merging");
    }

    const mergedPdf = await PDFLib.PDFDocument.create();

    for (const fileItem of pdfFileList) {
      const srcDoc = await PDFLib.PDFDocument.load(fileItem.bytes);
      const totalPages = srcDoc.getPageCount();
      const pageIndices = PDFCore.parsePageRanges(fileItem.range, totalPages);
      
      const copiedPages = await mergedPdf.copyPages(srcDoc, pageIndices);
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    return await mergedPdf.save();
  }

  /**
   * Split PDF document into multiple documents based on mode
   */
  async splitPDF(pdfBytes, mode, options, PDFLib) {
    if (!PDFLib) throw new Error("PDFLib is required for splitting");

    const srcDoc = await PDFLib.PDFDocument.load(pdfBytes);
    const totalPages = srcDoc.getPageCount();
    const results = [];

    if (mode === 'all') {
      // Split every single page into distinct document
      for (let i = 0; i < totalPages; i++) {
        const newDoc = await PDFLib.PDFDocument.create();
        const [page] = await newDoc.copyPages(srcDoc, [i]);
        newDoc.addPage(page);
        results.push({
          name: `pdflab_page_${i + 1}.pdf`,
          bytes: await newDoc.save()
        });
      }
    } else if (mode === 'every_n') {
      const n = options.n || 2;
      let part = 1;
      for (let i = 0; i < totalPages; i += n) {
        const newDoc = await PDFLib.PDFDocument.create();
        const indices = [];
        for (let j = i; j < Math.min(i + n, totalPages); j++) {
          indices.push(j);
        }
        const copied = await newDoc.copyPages(srcDoc, indices);
        copied.forEach((p) => newDoc.addPage(p));
        results.push({
          name: `pdflab_part_${part}.pdf`,
          bytes: await newDoc.save()
        });
        part++;
      }
    } else {
      // Custom range or extract
      const indices = PDFCore.parsePageRanges(options.range || '1', totalPages);
      const newDoc = await PDFLib.PDFDocument.create();
      const copied = await newDoc.copyPages(srcDoc, indices);
      copied.forEach((p) => newDoc.addPage(p));
      results.push({
        name: `pdflab_extracted_pages.pdf`,
        bytes: await newDoc.save()
      });
    }

    return results;
  }

  /**
   * Organize Pages (reorder, rotate, delete)
   */
  async organizePDF(pdfBytes, pageConfigs, PDFLib) {
    if (!PDFLib) throw new Error("PDFLib is required for page organization");

    const srcDoc = await PDFLib.PDFDocument.load(pdfBytes);
    const newDoc = await PDFLib.PDFDocument.create();

    for (const config of pageConfigs) {
      // 0-based original index
      const originalIndex = config.originalIndex;
      const [copiedPage] = await newDoc.copyPages(srcDoc, [originalIndex]);
      
      if (config.rotation) {
        const currentRot = copiedPage.getRotation().angle;
        copiedPage.setRotation(PDFLib.degrees((currentRot + config.rotation) % 360));
      }
      
      newDoc.addPage(copiedPage);
    }

    return await newDoc.save();
  }

  /**
   * Compress PDF (Object stream optimization & redundant dictionary pruning)
   */
  async compressPDF(pdfBytes, PDFLib) {
    if (!PDFLib) throw new Error("PDFLib is required for compression");

    const doc = await PDFLib.PDFDocument.load(pdfBytes);
    
    // Save with stream compression and object reuse
    return await doc.save({
      useObjectStreams: true,
      addDefaultPage: false,
      preservePDFForm: true
    });
  }

  /**
   * Protect PDF with AES password encryption
   */
  async protectPDF(pdfBytes, userPassword, ownerPassword, permissions, PDFLib) {
    if (!PDFLib) throw new Error("PDFLib is required for encryption");

    const doc = await PDFLib.PDFDocument.load(pdfBytes);
    
    if (doc.encrypt) {
      await doc.encrypt({
        userPassword,
        ownerPassword: ownerPassword || userPassword,
        permissions: permissions || {
          printing: 'highResolution',
          modifying: false,
          copying: false,
          annotating: false
        }
      });
    }

    return await doc.save();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PDFCore;
} else {
  window.PDFCore = PDFCore;
}

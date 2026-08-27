# Product Requirements Document (PRD)
## PDFLab — by reza

**Dokumen:** Product Requirements Document  
**Produk:** PDFLab  
**Platform:** Windows 10 & Windows 11 x64  
**Kategori:** Offline PDF Utility & Editor  
**Developer:** reza  
**Lisensi:** GNU GPLv3  
**Repository:** GitHub Public  
**Status:** Fase 1 / Initial Release  
**Bahasa PRD:** Bahasa Indonesia  
**Default UI:** English  
**Bahasa UI:** English & Bahasa Indonesia  

---

# 1. Executive Summary

**PDFLab** adalah aplikasi desktop Windows gratis dan open-source untuk membaca, mengelola, memodifikasi, mengonversi, mengompres, mengedit, dan melakukan OCR terhadap dokumen PDF secara **100% offline**.

PDFLab ditujukan untuk pengguna umum yang membutuhkan tools PDF tetapi tidak ingin mengunggah dokumen pribadi ke layanan online, tidak ingin membayar subscription, terganggu oleh iklan, atau merasa aplikasi PDF yang tersedia terlalu kompleks.

Prinsip utama PDFLab adalah:

> **Private. Offline. Free. Simple.**

Seluruh pemrosesan dokumen dilakukan secara lokal di komputer pengguna. PDFLab tidak membutuhkan akun, server, cloud, telemetry, analytics, crash reporting online, maupun koneksi internet.

Aplikasi menggunakan desain modern yang mengikuti pengalaman visual Windows 11, termasuk glass/blur effect jika didukung sistem, tetapi tetap kompatibel dengan Windows 10.

PDFLab juga menyediakan **Plugin System** sehingga developer pihak ketiga dapat memperluas kemampuan aplikasi menggunakan Plugin API/SDK resmi.

---

# 2. Problem Statement

Pengguna PDF saat ini sering menghadapi beberapa masalah:

- Dokumen harus di-upload ke website untuk melakukan operasi sederhana.
- Dokumen dapat mengandung informasi pribadi atau rahasia.
- Banyak layanan PDF membatasi fitur gratis.
- Software PDF profesional relatif mahal.
- Website PDF sering memiliki iklan atau batas penggunaan.
- Tools tersebar di banyak aplikasi atau website.
- Beberapa aplikasi memiliki UI yang kompleks.
- Sebagian aplikasi membutuhkan koneksi internet.
- Pengguna membutuhkan beberapa tool berbeda hanya untuk pekerjaan PDF sederhana.

PDFLab menyelesaikan masalah tersebut dengan menyediakan satu aplikasi Windows yang:

- Gratis.
- Open-source.
- Tanpa iklan.
- Tidak membutuhkan akun.
- Tidak membutuhkan internet.
- Tidak meng-upload dokumen.
- Mudah digunakan.
- Memiliki berbagai tools PDF dalam satu aplikasi.

---

# 3. Product Vision

Menjadikan PDFLab sebagai aplikasi PDF open-source Windows yang sederhana, modern, privat, dan dapat digunakan sepenuhnya offline untuk kebutuhan PDF sehari-hari.

PDFLab harus memberikan pengalaman:

**Open → Choose Tool → Process → Save**

tanpa account creation, subscription, iklan, atau upload ke server.

---

# 4. Product Principles

### 4.1 Offline First

PDFLab harus berfungsi sepenuhnya tanpa internet.

Tidak boleh ada dependency runtime yang mengharuskan koneksi ke server.

### 4.2 Privacy by Design

Dokumen tidak pernah dikirim keluar perangkat.

### 4.3 Local Processing

Merge, Split, OCR, Compress, Convert, Edit, dan operasi lainnya dilakukan secara lokal.

### 4.4 Free & Open Source

PDFLab menggunakan lisensi **GNU GPLv3**.

### 4.5 No Ads

Tidak ada advertising di aplikasi.

### 4.6 No Account

Tidak ada login, registration, ataupun user account.

### 4.7 Simple UX

Fitur kompleks harus tetap dapat digunakan pengguna non-teknis.

### 4.8 Windows Native Feel

UI mengikuti pola interaksi Windows modern.

### 4.9 Extensible

Plugin architecture memungkinkan fitur baru dikembangkan tanpa membuat core aplikasi menjadi monolitik.

---

# 5. Target Users

Target utama adalah **pengguna umum Windows**, antara lain:

- Pelajar.
- Mahasiswa.
- Guru.
- Pekerja kantoran.
- Freelancer.
- Administrasi.
- Pengguna rumahan.
- Developer.
- Pengguna yang menangani dokumen privat.
- Pengguna yang membutuhkan PDF tools tanpa subscription.

Tidak diperlukan pengetahuan teknis untuk menggunakan fungsi utama PDFLab.

---

# 6. Value Proposition

PDFLab menawarkan:

> **All the PDF tools you need, completely offline.**

Keunggulan utama:

- 100% offline.
- Privacy-first.
- Gratis.
- Open-source.
- Tanpa subscription.
- Tanpa iklan.
- Modern Windows UI.
- Mudah digunakan.
- Drag-and-drop.
- OCR offline.
- PDF editing.
- Batch processing.
- Plugin extensibility.

---

# 7. Platform Requirements

## Supported

- Windows 10 x64.
- Windows 11 x64.

## Tidak Didukung pada Fase 1

- Windows x86.
- Windows ARM64.
- macOS.
- Linux.
- Web.
- Android.
- iOS.

Windows 11 mendapatkan visual terbaik.

Windows 10 menggunakan fallback visual apabila efek tertentu tidak tersedia.

---

# 8. Technical Philosophy

PRD **tidak menetapkan framework programming tertentu**.

AI coding agent dapat menentukan stack setelah melakukan technical planning.

Stack yang dipilih harus memenuhi:

- Open-source compatible.
- Windows 10/11 x64.
- Full offline.
- Mendukung PDF rendering.
- Mendukung PDF manipulation.
- Mendukung OCR lokal.
- Mendukung plugin architecture.
- UI responsive.
- Mudah dipelihara solo developer.
- Memiliki dependency yang aktif dipelihara.
- Tidak memerlukan commercial runtime license.
- Kompatibel GPLv3.

Pemilihan library wajib melakukan pemeriksaan kompatibilitas lisensi terlebih dahulu.

---

# 9. Branding

Nama:

**PDFLab**

Developer attribution:

**by reza**

Footer aplikasi harus menampilkan:

**PDFLab by reza**

Branding digunakan secara konsisten pada:

- Installer.
- Main Window.
- About.
- Documentation.
- GitHub repository.
- Release package.

Logo yang telah disediakan menjadi logo awal PDFLab.

---

# 10. Information Architecture

Navigasi utama harus menyediakan akses cepat ke:

- Home
- Viewer
- Merge
- Split
- Compress
- Organize
- Convert
- OCR
- Edit PDF
- Protect
- Signature
- Batch Processing
- Plugins
- History
- Help
- Settings

Tidak diperlukan multi-document tabs.

Satu workspace menangani satu pekerjaan/dokumen utama pada satu waktu.

---

# 11. Home Dashboard

Home menjadi landing page utama.

Tampilan menggunakan cards untuk tools.

Contoh kelompok:

### Organize
- Merge
- Split
- Rotate
- Delete Pages
- Reorder Pages

### Optimize
- Compress

### Convert
- PDF → Image
- Image → PDF

### Edit
- Edit PDF
- Signature

### Security
- Protect
- Unlock

### Intelligence
- OCR

### Automation
- Batch Processing

File dapat di-drag langsung dari Windows File Explorer.

---

# 12. Drag & Drop

PDFLab wajib mendukung drag-and-drop.

Contoh:

**1 PDF → Main Window**

Membuka PDF.

**Multiple PDF → Merge**

Memasukkan seluruh file ke merge queue.

**Multiple images → Image to PDF**

Memasukkan gambar ke conversion workspace.

**Multiple files → Batch**

Memasukkan file ke batch queue.

Drag area harus memiliki visual feedback ketika file berada di atas drop target.

---

# 13. PDF Viewer

PDFLab berfungsi sebagai PDF viewer dasar.

Wajib mendukung:

- Open PDF.
- Render halaman.
- Scroll halaman.
- Page navigation.
- Previous/Next page.
- Jump to page.
- Zoom In.
- Zoom Out.
- Fit Page.
- Fit Width.
- Search text.
- Fullscreen.
- Keyboard shortcuts.
- Thumbnail sidebar.

Viewer harus tetap responsif pada dokumen besar.

Rendering halaman yang belum terlihat sebaiknya dilakukan secara lazy/on-demand.

---

# 14. Merge PDF

Pengguna dapat menggabungkan beberapa PDF.

Flow:

**Select Files → Arrange → Configure → Merge → Save**

Requirement:

- Multiple PDF.
- Drag-and-drop.
- Reorder file.
- Remove file.
- Preview.
- File size.
- Page count.
- Select page range per file.
- Merge seluruh halaman.
- Progress indicator.
- Cancel.
- Output preview/summary.

Contoh:

Document A → Pages 1–5  
Document B → All Pages  
Document C → Pages 3–8

Output:

`pdflab_merged_document.pdf`

---

# 15. Split PDF

Split mendukung:

### Page Range

Contoh:

`1-5, 8-10, 15`

### Every N Pages

Contoh:

Split setiap 5 halaman.

### Extract Pages

Mengambil halaman tertentu menjadi PDF baru.

### Split Every Page

Setiap halaman menjadi file PDF terpisah.

Contoh output:

`pdflab_split_document_01.pdf`

`pdflab_split_document_02.pdf`

---

# 16. Organize Pages

Workspace berbasis thumbnail.

Pengguna dapat:

- Select page.
- Multi-select.
- Drag page.
- Reorder.
- Delete.
- Rotate left.
- Rotate right.
- Preview.

Perubahan harus mendukung:

**Undo / Redo**

Operasi harus bersifat non-destructive sampai pengguna melakukan Save.

---

# 17. Compress PDF

Compress memiliki dua mode utama.

## Preset Mode

Pilihan:

- Low Compression
- Medium Compression
- High Compression

UI harus menjelaskan trade-off ukuran dan kualitas.

## Target Size

Pengguna dapat menentukan target seperti:

`5 MB`

PDFLab mencoba mendekati ukuran tersebut melalui optimisasi bertahap.

Target size adalah **best effort**, bukan jaminan exact file size.

## Advanced Settings

Dapat mencakup:

- Image quality.
- DPI/resolution.
- Image optimization.

Setelah selesai tampilkan:

**Before:** 20 MB  
**After:** 6.2 MB  
**Reduced:** 69%

---

# 18. PDF → Image

Format Fase 1:

- PNG
- JPG

Settings:

- Output format.
- DPI/resolution.
- Image quality.
- All pages.
- Selected/page range.

Contoh output:

`pdflab_document_page_001.png`

---

# 19. Image → PDF

Mendukung multiple images.

Pengguna dapat:

- Add image.
- Remove.
- Reorder.
- Drag-and-drop.

## Paper Size

Daftar mengikuti ukuran kertas standar yang relevan, misalnya:

- A3
- A4
- A5
- Letter
- Legal
- Tabloid
- Executive
- Auto / Original

## Orientation

- Portrait
- Landscape

## Margin

Pengguna dapat menentukan margin.

## Image Fit

- Fit
- Fill
- Stretch
- Original Size

---

# 20. OCR

OCR harus bekerja **100% offline**.

Bahasa:

- English
- Bahasa Indonesia

Tidak diperlukan downloadable language pack pada Fase 1.

OCR dapat diterapkan ke:

- All Pages.
- Custom Page Range.

Contoh:

`1-5,8,10-15`

## Searchable PDF

Tujuan utama adalah menghasilkan PDF yang mempertahankan visual asli sebanyak mungkin dan memiliki searchable/selectable text layer.

## OCR Processing

Pipeline dapat mencakup:

- Page rendering.
- Rotation correction.
- Deskew.
- Grayscale.
- Contrast optimization.
- Noise reduction.
- OCR.
- Text layer generation.

Tidak boleh ada OCR request ke cloud API.

GPU tidak menjadi requirement.

OCR harus dapat berjalan CPU-only.

---

# 21. Edit PDF

Fase 1 menyediakan Basic PDF Editing.

Requirement:

### Edit Text

Mengubah teks existing apabila struktur PDF memungkinkan.

Karena struktur teks PDF kompleks, implementasi harus mempertimbangkan:

- Font availability.
- Text positioning.
- Encoding.
- Embedded fonts.

Jika suatu teks tidak dapat diedit dengan aman, aplikasi harus memberikan feedback yang jelas daripada merusak dokumen.

### Add Text

Pengguna dapat menambahkan textbox.

### Add Image

Pengguna dapat memasukkan gambar ke halaman.

### Highlight / Annotation

Pengguna dapat menambahkan highlight/annotation.

### Shapes

Minimal mendukung basic geometric shapes.

### Undo / Redo

Semua perubahan editor harus masuk operation history selama sesi.

---

# 22. Protect PDF

Pengguna dapat menambahkan password ke PDF.

Flow:

**Select PDF → Set Password → Confirm → Protect → Save**

Password tidak boleh:

- Masuk history.
- Ditulis ke log.
- Disimpan otomatis.
- Dikirim ke service eksternal.

---

# 23. Unlock PDF

PDFLab dapat menghapus password/protection dari PDF **ketika pengguna memiliki password yang valid**.

Flow:

**Open Protected PDF → Enter Password → Unlock → Save**

PDFLab tidak menyediakan mekanisme password cracking atau bypass.

---

# 24. Signature

Fase 1 menyediakan **visual signature**, bukan certificate-based cryptographic signing.

Pengguna dapat:

- Import signature image.
- Save signature locally.
- Select saved signature.
- Place signature.
- Resize.
- Reposition.
- Delete.

Signature Manager:

- Add.
- Rename.
- Delete.

Signature tersimpan hanya di komputer pengguna.

Tidak ada `.pfx/.p12` signing pada Fase 1.

---

# 25. Batch Processing

Batch processing memungkinkan banyak dokumen diproses sekaligus.

Operasi yang kompatibel dapat mencakup:

- Compress.
- Rotate.
- Convert.
- OCR.

Batch UI harus menyediakan:

- Add files.
- Remove.
- Clear queue.
- Status per file.
- Overall progress.
- Cancel.
- Success count.
- Failure count.

Contoh status:

`Waiting → Processing → Completed / Failed / Cancelled`

---

# 26. Print

PDFLab menyediakan printing melalui sistem printer Windows.

Requirement:

- Select printer.
- Page range.
- Copies.
- Paper size.
- Orientation.
- Print preview.

Printing harus menggunakan printer lokal/sistem Windows dan tidak memerlukan service internet.

---

# 27. Local History

PDFLab menyimpan activity history secara lokal.

History dapat menyimpan:

- Operation type.
- Timestamp.
- Local file reference.
- Output reference.
- Success/failure status.

Tidak menyimpan:

- Document content.
- Password.
- OCR text.

Controls:

- Delete item.
- Clear History.
- Auto-clear.

Auto-clear:

- 7 days.
- 30 days.
- 90 days.
- Never.

---

# 28. Output Management

Settings menyediakan:

**Default Output Folder**

Setiap proses juga dapat menggunakan:

**Save As**

dan opsi:

**Overwrite Original**

Overwrite harus membutuhkan pilihan eksplisit dari pengguna.

---

# 29. File Naming

Default output menggunakan prefix:

`pdflab_`

Contoh:

`pdflab_compressed_report.pdf`

`pdflab_merged_documents.pdf`

`pdflab_ocr_scan.pdf`

`pdflab_split_document_01.pdf`

Nama dapat diubah pengguna sebelum penyimpanan.

PDFLab harus menghindari overwrite tidak disengaja.

---

# 30. File Size Handling

Target normal:

**≤100 MB per input file**

Ini merupakan **soft limit**, bukan hard limit.

Jika file >100 MB:

> This file is larger than 100 MB. Processing may require more memory and take longer.

Pilihan:

**Cancel**

**Try Anyway**

Untuk Merge/Batch, 100 MB berlaku per file, bukan total queue.

---

# 31. Processing UX

Operasi berat harus berjalan tanpa membuat UI freeze.

Wajib tersedia:

- Progress bar.
- Percentage jika dapat dihitung.
- Current operation.
- Current file.
- Cancel button.

Contoh:

`Processing page 42 of 180`

`67%`

`Cancel`

Cancellation harus berhenti pada titik aman dan tidak menghasilkan file corrupt sebagai output final.

---

# 32. Completion Summary

Setelah proses selesai, tampilkan summary.

Contoh:

**Compression Complete**

Original: 24.8 MB  
Output: 8.1 MB  
Saved: 67%  
Duration: 12 sec

Actions:

- Open File.
- Open Folder.
- Done.

Untuk batch:

- Completed.
- Failed.
- Cancelled.
- Total duration.

---

# 33. Windows Notifications

Untuk proses panjang, PDFLab dapat mengirim Windows notification jika window diminimize.

Contoh:

**PDFLab**

`OCR completed successfully.`

Notifikasi tidak boleh menampilkan:

- Isi dokumen.
- OCR text.
- Password.
- Informasi sensitif lainnya.

---

# 34. Unsaved Changes Protection

Jika pengguna menutup dokumen/aplikasi dengan perubahan yang belum disimpan:

Dialog:

**Save changes before closing?**

Actions:

- Save.
- Don't Save.
- Cancel.

Tidak diperlukan autosave/session recovery pada Fase 1.

---

# 35. Keyboard Shortcuts

Minimal:

| Action | Shortcut |
|---|---|
| Open | Ctrl+O |
| Save | Ctrl+S |
| Print | Ctrl+P |
| Undo | Ctrl+Z |
| Redo | Ctrl+Y |
| Search | Ctrl+F |
| Select All | Ctrl+A |
| Zoom In | Ctrl++ |
| Zoom Out | Ctrl+- |
| Delete selected item | Delete |

Shortcut lain dapat ditentukan berdasarkan Windows UX convention.

---

# 36. Themes

PDFLab mendukung:

- Follow System
- Light
- Dark

Default:

**Follow System**

Theme preference disimpan lokal.

---

# 37. UI / Visual Design

Desain harus:

- Modern.
- Minimal.
- Clean.
- Familiar bagi pengguna Windows.
- Menghindari UI terlalu padat.

Windows 11 dapat menggunakan:

- Glass effect.
- Blur.
- Mica/Acrylic-like surfaces jika teknologi yang dipilih mendukungnya.

Windows 10 harus memiliki graceful fallback.

Glass effect tidak boleh mengurangi readability.

---

# 38. Localization

Bahasa Fase 1:

- English.
- Bahasa Indonesia.

Default:

**English**

Pengguna dapat mengubah bahasa melalui:

**Settings → Language**

Perubahan bahasa idealnya berlaku tanpa reinstall.

Seluruh user-facing strings harus menggunakan localization resource, bukan hardcoded.

---

# 39. Settings

Settings minimal memiliki kategori:

### General

- Language.
- Theme.
- Default output folder.

### History

- Auto-clear history.
- Clear history.

### Plugins

- Plugin configuration/management entry.

### Data / Logs

- View logs.
- Clear logs.
- Export logs.

### About

- Logo.
- PDFLab.
- Version.
- `by reza`.
- GPLv3.
- Open-source licenses.
- GitHub repository information.

---

# 40. Windows File Explorer Integration

PDFLab harus dapat:

- Open `.pdf`.
- Open with PDFLab.
- Menerima file dari drag-and-drop.

Installer dapat mendaftarkan PDFLab sebagai aplikasi yang mendukung `.pdf`.

Pengguna dapat memilih PDFLab sebagai default PDF viewer melalui mekanisme Windows.

PDFLab **tidak boleh memaksa** menjadi default PDF reader.

---

# 41. Installer

Installer untuk:

**Windows x64**

Target:

**Current User**

Tidak perlu installation mode multi-user.

Installer menyediakan pilihan:

- Create Desktop Shortcut.
- Create Start Menu Shortcut.
- Register PDFLab for `.pdf`.
- File association jika diizinkan mekanisme Windows.

Installer tidak boleh:

- Meng-install adware.
- Mengubah browser.
- Mengubah search engine.
- Meng-install software pihak ketiga yang tidak diperlukan.

---

# 42. Uninstaller

Uninstaller menghapus program files PDFLab.

Tampilkan opsi:

**Remove all PDFLab user data**

Jika dipilih, hapus data PDFLab dari AppData.

Jangan pernah menghapus:

- PDF pengguna.
- Output PDF pengguna.
- File lain di folder dokumen pengguna.

---

# 43. Local Data Storage

Data aplikasi ditempatkan pada lokasi standar user AppData Windows.

Data dapat mencakup:

- Settings.
- History.
- Saved signatures.
- Plugin configuration.
- Installed local plugins.
- Logs.

Data sensitif harus diminimalkan.

---

# 44. Privacy Requirements

PDFLab harus memenuhi prinsip:

**Zero document upload**

Dilarang:

- Cloud processing.
- Telemetry.
- Analytics.
- Remote crash reporting.
- Usage tracking.
- Account tracking.
- Background network request.

PDFLab harus dapat digunakan pada PC tanpa internet.

---

# 45. Network Requirement

**Network requirement: NONE**

PDFLab tidak melakukan:

- Auto update check.
- Online activation.
- License verification.
- Cloud OCR.
- Remote analytics.
- Remote config.

Update dilakukan manual oleh pengguna.

---

# 46. Updates

Update dilakukan melalui installer baru.

Pengguna secara manual:

1. Membuka repository/release source.
2. Mengunduh installer terbaru.
3. Menjalankan installer.

PDFLab tidak melakukan automatic update checking.

---

# 47. GitHub

Repository resmi:

**GitHub**

Repository dibuat:

**Public sejak awal development.**

Repository idealnya berisi:

- Source.
- README.
- LICENSE.
- CONTRIBUTING.
- Documentation.
- Plugin SDK.
- Plugin examples.
- Issue templates.
- Build instructions.
- Release packages.

---

# 48. Open Source License

License:

**GNU General Public License v3 (GPLv3)**

File repository:

`LICENSE`

Semua dependency harus diperiksa kompatibilitas lisensinya.

---

# 49. Plugin System

Plugin System adalah bagian **Fase 1**.

Tujuan:

- Memperluas PDFLab.
- Memungkinkan tool baru.
- Mendukung kontribusi komunitas.
- Menjaga core modular.

PDFLab mendukung:

- Official plugins.
- Third-party plugins.
- Local plugin installation.

Tidak ada online marketplace pada Fase 1.

---

# 50. Plugin Manager

Plugin Manager harus menampilkan:

- Plugin Name.
- Version.
- Developer.
- Description.
- Official / Third-party.
- Enabled/Disabled.
- Compatibility status.

Actions:

- Install.
- Enable.
- Disable.
- Uninstall.

Third-party plugin menampilkan security warning sebelum instalasi/aktivasi.

---

# 51. Plugin Compatibility

Setiap plugin harus memiliki:

**Plugin API Version**

dan:

**Minimum PDFLab Version**

PDFLab memvalidasi compatibility sebelum load.

Jika tidak compatible:

**Plugin cannot be loaded because it requires a newer PDFLab/Plugin API version.**

Plugin tersebut tidak boleh menyebabkan core aplikasi crash hanya karena incompatibility yang dapat dideteksi.

---

# 52. Plugin Security Boundary

Fase 1 **tidak memiliki granular permission system** untuk plugin.

Karena itu UI harus menjelaskan bahwa third-party plugin merupakan software tambahan yang dapat menjalankan kode lokal.

Pengguna harus memberikan konfirmasi sebelum memasang plugin pihak ketiga.

PDFLab tidak boleh memberi label **Official** pada plugin yang tidak termasuk distribusi resmi.

---

# 53. Plugin SDK

Repository menyediakan Plugin SDK/API.

Dokumentasi minimal:

- Plugin architecture.
- Manifest format.
- Plugin lifecycle.
- API versioning.
- UI integration.
- Tool registration.
- File handling interface.
- Error handling.
- Localization guidance.

Sediakan minimal satu:

**Example Plugin / Plugin Template**

agar developer dapat membuat plugin tanpa mempelajari seluruh source PDFLab.

---

# 54. Error Handling

Error harus menggunakan bahasa yang dapat dipahami pengguna.

Hindari dialog seperti:

`Error 0x839391`

tanpa penjelasan.

Contoh yang lebih baik:

**Unable to open this PDF.**

`The file may be corrupted or use a feature that PDFLab does not currently support.`

Actions:

- Close.
- View Details.

---

# 55. Local Error Logging

PDFLab memiliki local technical logging.

Log dapat mencatat:

- Timestamp.
- App version.
- Operation.
- Error code.
- Stack trace.
- Plugin version.
- Plugin API version.
- Technical diagnostics.

Log **tidak boleh mencatat**:

- Password.
- OCR output.
- Document text.
- Page image.
- Signature image content.
- Isi dokumen.

User dapat:

- View Log.
- Export Log.
- Clear Log.

Tidak ada automatic log upload.

---

# 56. Accessibility

PDFLab harus memperhatikan:

- Keyboard navigation.
- Logical tab order.
- Visible focus state.
- Tooltip pada icon.
- Windows display scaling.
- High DPI.
- Basic screen-reader compatibility.
- Text contrast.
- UI readability.

Fungsi utama tidak boleh bergantung hanya pada warna.

---

# 57. Offline Help

PDFLab menyediakan dokumentasi offline.

Help dapat mencakup:

- Getting Started.
- Merge Guide.
- Split Guide.
- Compress Guide.
- Organize Guide.
- Convert Guide.
- OCR Guide.
- Edit Guide.
- Protect Guide.
- Signature Guide.
- Batch Guide.
- Plugin Guide.
- Keyboard Shortcuts.
- Privacy.
- Troubleshooting.

Dokumentasi tersedia tanpa internet.

---

# 58. Performance Requirements

## Startup

Target:

**<5 detik**

pada hardware rekomendasi dalam kondisi normal.

## Responsiveness

UI tidak boleh freeze selama operasi berat.

Long-running operations harus berjalan di background/asynchronous worker sesuai teknologi yang dipilih.

Contoh:

- OCR.
- Compression.
- Conversion.
- Merge.
- Batch.

## Memory

Hindari memuat seluruh dokumen ke RAM apabila tidak diperlukan.

Gunakan strategi seperti:

- Lazy rendering.
- Page-level processing.
- Streaming.
- Chunk processing.
- Thumbnail caching.

sesuai kemampuan stack.

---

# 59. Suggested System Requirements

## Minimum

- Windows 10 x64.
- Dual-core x64 CPU.
- 4 GB RAM.
- Storage yang cukup untuk aplikasi + temporary processing.

## Recommended

- Windows 10/11 x64.
- Modern 4-core CPU atau lebih.
- 8 GB RAM atau lebih.
- SSD.

GPU khusus tidak diwajibkan.

---

# 60. Temporary Files

Operasi tertentu dapat membutuhkan temporary files.

Requirement:

- Gunakan app-specific temp directory.
- Bersihkan temporary files setelah operasi selesai.
- Bersihkan temp jika operasi dibatalkan jika aman dilakukan.
- Jangan menghapus file pengguna.
- Jangan menyimpan password di temp.
- Jangan meninggalkan plaintext sensitive data jika tidak diperlukan.

---

# 61. File Integrity

Operasi tidak boleh langsung merusak original file.

Default behavior:

**Save As**

Overwrite hanya terjadi jika pengguna memilih:

**Overwrite Original**

Untuk overwrite, implementasi ideal menggunakan:

1. Generate temporary output.
2. Validate output.
3. Replace original.

Dengan demikian risiko kehilangan file karena proses gagal dapat diminimalkan.

---

# 62. Functional Priority — Fase 1

Karena Fase 1 mencakup keseluruhan scope yang telah ditetapkan, implementasi tetap perlu memiliki urutan internal.

## P0 — Core Foundation

- Application shell.
- Windows UI.
- PDF rendering/viewer.
- Open/save.
- Thumbnail system.
- File handling.
- Drag-and-drop.
- Undo/Redo infrastructure.
- Background job system.
- Progress/Cancel.
- Settings.
- Localization.
- Theme.
- Logging.
- Local storage.

## P0 — Core PDF Tools

- Merge.
- Split.
- Rotate.
- Delete Pages.
- Reorder Pages.
- Compress.
- PDF → PNG/JPG.
- Image → PDF.
- Protect.
- Unlock.

## P1 — Advanced Fase 1

- OCR.
- Basic Edit PDF.
- Signature.
- Batch Processing.
- Printing.
- History.
- Windows notifications.

## P1 — Extensibility

- Plugin API.
- Plugin Manager.
- Third-party plugin installation.
- Plugin compatibility/versioning.
- SDK documentation.
- Example plugin.

## P1 — Product Completion

- Offline documentation.
- Accessibility.
- Explorer integration.
- Installer.
- Uninstaller.
- About/Open Source Licenses.

Semua kelompok di atas tetap merupakan scope **Fase 1**. P0/P1 menunjukkan urutan implementasi, bukan fase produk terpisah.

---

# 63. Recommended Development Milestones

Karena PDFLab dikembangkan oleh **solo developer + AI coding agent** tanpa deadline tetap, development sebaiknya dilakukan secara incremental.

## Milestone 0 — Technical Discovery

AI agent:

- Evaluasi framework.
- Evaluasi PDF engine.
- Evaluasi OCR engine.
- Evaluasi installer.
- Evaluasi localization.
- Evaluasi plugin architecture.
- Audit license dependency.
- Buat architecture decision records.

Tidak melakukan full implementation sebelum technical spike selesai.

## Milestone 1 — Application Foundation

Bangun:

- Shell.
- Navigation.
- Theme.
- Localization.
- Settings.
- Logging.
- Local storage.
- Common dialogs.
- Job/progress system.

## Milestone 2 — PDF Viewer

Bangun:

- Open PDF.
- Render.
- Thumbnail.
- Zoom.
- Navigation.
- Search.
- Fullscreen.
- File Explorer drag/drop.

## Milestone 3 — Organize

Bangun:

- Rotate.
- Delete.
- Reorder.
- Undo/Redo.

## Milestone 4 — Merge & Split

Bangun seluruh requirement Merge dan Split.

## Milestone 5 — Convert

Bangun:

- PDF → PNG/JPG.
- Image → PDF.

## Milestone 6 — Compression

Bangun:

- Presets.
- Advanced settings.
- Target size.
- Comparison summary.

## Milestone 7 — Security

Bangun:

- Protect.
- Unlock.

## Milestone 8 — OCR

Bangun:

- English OCR.
- Indonesian OCR.
- Range selection.
- Searchable PDF.

## Milestone 9 — Editor

Bangun:

- Edit Text.
- Add Text.
- Add Image.
- Highlight/Annotation.
- Shapes.
- Undo/Redo.

## Milestone 10 — Signature

Bangun visual signature + local signature library.

## Milestone 11 — Batch

Integrasikan job engine dengan batch operations.

## Milestone 12 — Plugin Platform

Bangun:

- Plugin contract.
- Manifest.
- Plugin loader.
- Version compatibility.
- Plugin Manager.
- Third-party installation.
- SDK.
- Example plugin.

## Milestone 13 — Windows Integration

Bangun:

- Printing.
- Notifications.
- File association.
- Installer.
- Uninstaller.

## Milestone 14 — Product Hardening

- Performance.
- Accessibility.
- Error handling.
- Documentation.
- Privacy verification.
- License audit.
- Installer testing.

---

# 64. AI Coding Agent Rules

PRD ini menjadi **source of truth** bagi AI coding agent.

Agent **tidak boleh mencoba mengimplementasikan seluruh PDFLab sekaligus**.

Untuk setiap milestone:

1. Baca PRD.
2. Analisis existing codebase.
3. Buat implementation plan.
4. Identifikasi dependency.
5. Periksa license.
6. Implementasikan task kecil.
7. Tambahkan test.
8. Jalankan test.
9. Perbaiki regression.
10. Dokumentasikan keputusan teknis.

Agent tidak boleh menghapus requirement hanya karena implementasinya sulit tanpa persetujuan product owner.

---

# 65. Architecture Principles for AI Agent

Walaupun stack belum ditentukan, architecture harus mengutamakan:

**Separation of Concerns**

Pisahkan:

- UI.
- PDF domain.
- File I/O.
- Processing.
- OCR.
- Plugin system.
- Persistence.
- Logging.

**Modularity**

Tool baru tidak seharusnya membutuhkan perubahan besar pada application core.

**Cancellation**

Long-running service harus mempertimbangkan cancellation.

**Testability**

Business logic tidak boleh bergantung langsung pada UI jika dapat dihindari.

**Replaceability**

PDF/OCR implementation sebaiknya memiliki abstraction sehingga engine dapat diganti jika ditemukan library yang lebih baik.

---

# 66. Suggested Logical Modules

Nama aktual ditentukan berdasarkan stack.

Struktur konseptual:

```text
PDFLab
│
├── App
├── UI
├── Core
│   ├── Documents
│   ├── Pages
│   ├── Jobs
│   └── FileSystem
│
├── Features
│   ├── Viewer
│   ├── Merge
│   ├── Split
│   ├── Organize
│   ├── Compress
│   ├── Convert
│   ├── OCR
│   ├── Editor
│   ├── Protect
│   ├── Signature
│   ├── Batch
│   └── Print
│
├── Plugins
├── Persistence
├── Localization
├── Logging
└── Tests
```

Struktur tersebut merupakan guideline, bukan kewajiban framework.

---

# 67. Core Acceptance Criteria

Fase 1 dianggap memenuhi product requirement ketika:

- PDFLab dapat diinstall pada Windows 10/11 x64.
- Aplikasi dapat digunakan tanpa internet.
- Tidak ada mandatory network request.
- PDF dapat dibuka dan dilihat.
- Merge bekerja.
- Split bekerja.
- Rotate/Delete/Reorder bekerja.
- Compression bekerja.
- PDF → PNG/JPG bekerja.
- Image → PDF bekerja.
- OCR English/Indonesian bekerja lokal.
- Protect/Unlock bekerja.
- Basic editing tersedia.
- Visual signature tersedia.
- Printing tersedia.
- Batch processing tersedia.
- Plugin Manager tersedia.
- Third-party plugin dapat dipasang lokal.
- Plugin API/version compatibility tersedia.
- History lokal tersedia.
- Error logging lokal tersedia.
- English/Indonesian UI tersedia.
- Light/Dark/System theme tersedia.
- Installer tersedia.
- Tidak ada iklan.
- Tidak ada akun.
- Tidak ada telemetry.
- Tidak ada cloud processing.

---

# 68. Privacy Acceptance Test

Sebelum release, lakukan pengujian dalam kondisi:

**Internet disconnected.**

Semua fungsi core harus tetap bekerja.

Selain itu lakukan network inspection.

Expected:

**0 mandatory external network requests.**

PDFLab tetap dapat:

- Start.
- Open.
- Edit.
- Merge.
- Split.
- Compress.
- Convert.
- OCR.
- Protect.
- Print.
- Load local plugins.

tanpa internet.

---

# 69. UX Acceptance Criteria

Pengguna baru harus dapat melakukan operasi umum tanpa membaca dokumentasi panjang.

Contoh Merge:

1. Open PDFLab.
2. Select Merge.
3. Drag PDF.
4. Reorder.
5. Merge.
6. Save.

UI harus selalu menjawab tiga pertanyaan:

**Apa yang sedang dilakukan?**

**Berapa progresnya?**

**Apa yang harus dilakukan berikutnya?**

---

# 70. Error Scenarios yang Wajib Ditangani

Minimal:

- Invalid PDF.
- Corrupted PDF.
- Password protected PDF.
- Wrong password.
- Unsupported image.
- Disk full.
- Output folder unavailable.
- File read-only.
- File currently in use.
- Permission denied.
- OCR failure.
- Cancelled operation.
- Plugin incompatible.
- Plugin failed to load.
- Printer unavailable.
- File >100 MB.
- Output filename conflict.

Tidak boleh menyebabkan silent crash.

---

# 71. Non-Goals Fase 1

Tidak termasuk:

- Cloud storage.
- User accounts.
- Sync.
- Online PDF processing.
- Online OCR.
- Telemetry.
- Analytics.
- Ads.
- Subscription.
- Watermark tool.
- PDF metadata editor.
- Cryptographic certificate signing.
- `.pfx/.p12` signing.
- Autosave recovery.
- Multi-document tabs.
- Plugin marketplace online.
- Granular plugin permission system.
- Safe Mode.
- OCR language download system.
- ARM64.
- x86.
- macOS.
- Linux.
- Mobile.

---

# 72. Risks

## PDF Editing Complexity

Mengubah existing text di PDF jauh lebih kompleks daripada menambahkan text.

Mitigasi:

- Buat capability detection.
- Fail gracefully.
- Jangan menjanjikan Word-like editing untuk semua PDF.

## Compression Target Size

Ukuran target tidak selalu dapat dicapai tanpa penurunan kualitas ekstrem.

Mitigasi:

Label sebagai **best effort**.

## OCR Accuracy

OCR bergantung pada kualitas scan.

Mitigasi:

Preprocessing + user guidance.

## Memory Usage

Dokumen besar dapat menghabiskan RAM.

Mitigasi:

Lazy rendering, streaming, page processing.

## Third-Party Plugins

Plugin dapat menyebabkan crash atau menjalankan kode yang tidak aman.

Mitigasi Fase 1:

- Warning.
- Compatibility check.
- Enable/Disable.
- Uninstall.
- Official/Third-party labeling.

## Solo Developer Scope

Fase 1 sangat besar.

Mitigasi:

- Milestone-driven development.
- Test setiap milestone.
- Jangan parallel-build semua fitur.
- Gunakan shared processing infrastructure.
- AI agent mengikuti PRD sebagai source of truth.

---

# 73. Success Metrics

Karena tidak ada analytics/telemetry, success metrics tidak dikumpulkan otomatis dari pengguna.

Project-level metrics dapat berasal dari GitHub dan testing manual, seperti:

- Stable builds.
- Crash-free test scenarios.
- Test coverage pada critical modules.
- GitHub stars/forks secara publik.
- Issues.
- Community contributions.
- Release downloads jika GitHub menyediakannya secara publik.
- User feedback.

Tidak ada in-app tracking untuk mengukur metrics.

---

# 74. Definition of Done — Feature

Sebuah fitur dianggap selesai jika:

- Requirement terpenuhi.
- UI English tersedia.
- UI Indonesian tersedia.
- Error handling tersedia.
- Cancellation tersedia jika proses panjang.
- Tidak memblokir UI.
- Test relevan tersedia.
- Tidak melakukan network request.
- Dokumentasi diperbarui.
- Accessibility dasar diperiksa.
- Logging tidak membocorkan data sensitif.
- Dependency license telah diperiksa.

---

# 75. Definition of Done — Fase 1

Fase 1 dianggap selesai apabila seluruh scope yang ditetapkan dalam PRD telah:

- Diimplementasikan.
- Terintegrasi.
- Diuji.
- Didokumentasikan.
- Dapat diinstall.
- Dapat digunakan offline.
- Tidak memiliki blocker bug yang diketahui.
- Tidak memiliki mandatory network dependency.
- Tidak mengandung telemetry/analytics.
- Memenuhi privacy requirements.
- Memiliki repository public.
- Memiliki GPLv3 license.
- Memiliki Plugin SDK.
- Memiliki installer Windows x64.

---

# 76. Recommended Repository Documents

GitHub repository sebaiknya memiliki:

```text
README.md
LICENSE
CONTRIBUTING.md
CODE_OF_CONDUCT.md
SECURITY.md
PRIVACY.md
BUILDING.md
ARCHITECTURE.md
PLUGIN_SDK.md
CHANGELOG.md
```

Dokumentasi tersebut membantu AI agent dan contributor memahami aturan proyek.

---

# 77. Recommended README Positioning

Headline:

**PDFLab**

**Private, offline and open-source PDF tools for Windows.**

Key points:

- Fully offline.
- No uploads.
- No ads.
- No account.
- Open source.
- Built for Windows.

Footer/attribution:

**PDFLab by reza**

---

# 78. Future Considerations

Fase 2 **belum ditentukan**.

Ide baru tidak otomatis masuk roadmap.

Setelah Fase 1 stabil, product owner dapat mengevaluasi:

- Feedback pengguna.
- Community requests.
- Plugin ecosystem.
- Performance.
- Technical debt.
- Missing PDF workflows.

Kemudian PRD Fase 2 dibuat secara terpisah.

---

# 79. Final Product Statement

**PDFLab** adalah aplikasi PDF desktop untuk Windows yang memberikan berbagai kemampuan PDF dalam satu tempat tanpa mengorbankan privasi pengguna.

Produk dibangun berdasarkan lima fondasi:

**Offline**

Tidak membutuhkan internet.

**Private**

Dokumen tetap berada di PC pengguna.

**Free**

Tidak ada subscription atau paywall.

**Open**

Source code tersedia secara publik dengan GPLv3.

**Extensible**

Plugin API memungkinkan komunitas memperluas kemampuan PDFLab.

Identitas produk:

> **PDFLab — by reza**  
> **Private. Offline. Open Source.**

---

# 80. Product Decision Summary

| Area | Decision |
|---|---|
| Product | PDFLab |
| Branding | PDFLab by reza |
| Platform | Windows 10/11 |
| Architecture | x64 |
| Target User | General users |
| Internet | Fully offline |
| Cloud | None |
| Account | None |
| Ads | None |
| Telemetry | None |
| License | GPLv3 |
| Repository | Public GitHub |
| Developer Model | Solo + AI Agent |
| UI Default | English |
| Localization | English + Indonesian |
| Theme | System / Light / Dark |
| Normal File Target | ≤100 MB/file |
| >100 MB | Warning + Try Anyway |
| Output Prefix | `pdflab_` |
| Watermark | Out of scope |
| Metadata Editor | Out of scope |
| OCR | English + Indonesian |
| PDF Editor | Basic editor included |
| Signature | Visual/local |
| Plugin System | Included Fase 1 |
| Third-party Plugins | Supported locally |
| Plugin SDK | Included |
| Batch Processing | Included |
| Update | Manual |
| Installer | Current-user Windows installer |
| Default PDF App | Optional via Windows |
| History | Local |
| Logs | Local/private |
| Autosave Recovery | No |
| Multi-document Tabs | No |
| Fase 2 | TBD |

---

# 81. Instruction to Antigravity / AI Coding Agent

Saat PRD ini diberikan kepada AI coding agent, gunakan instruksi berikut sebagai prinsip eksekusi:

**PDFLab PRD adalah source of truth untuk product behavior.**

Jangan langsung membangun seluruh aplikasi.

Mulai dengan **Milestone 0 — Technical Discovery**.

Sebelum menulis production implementation:

1. Analisis seluruh requirement.
2. Pilih stack Windows yang paling sesuai.
3. Evaluasi minimal beberapa opsi PDF engine.
4. Evaluasi OCR engine offline.
5. Audit license compatibility dengan GPLv3.
6. Tentukan architecture modular.
7. Tentukan plugin contract sejak awal agar core tidak perlu dirombak kemudian.
8. Buat Architecture Decision Records.
9. Buat project skeleton.
10. Buat test strategy.

Setelah technical plan disetujui, kerjakan milestone satu per satu.

Untuk setiap milestone:

**Plan → Implement → Test → Review → Document → Commit**

Jangan mengorbankan prinsip utama PDFLab:

> **No cloud. No telemetry. No ads. No account. User documents stay local.**
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function createIcoFromPngBuffers(pngBuffers, sizes) {
  const count = pngBuffers.length;
  // Header: 6 bytes
  // Directory: 16 bytes * count
  let offset = 6 + 16 * count;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // count

  const dirEntries = [];
  for (let i = 0; i < count; i++) {
    const size = sizes[i];
    const buf = pngBuffers[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(buf.length, 8); // size in bytes
    entry.writeUInt32LE(offset, 12); // file offset
    offset += buf.length;
    dirEntries.push(entry);
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers]);
}

async function generateAppIcons() {
  console.log('Generating high-res PNG layers from logo.svg...');
  const svgBuffer = fs.readFileSync(path.join(__dirname, 'logo.svg'));

  const sizes = [256, 128, 64, 48, 32, 16];
  const pngBuffers = [];

  for (const size of sizes) {
    const buf = await sharp(svgBuffer)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push(buf);
  }

  // Also save a standard 512x512 icon.png
  await sharp(svgBuffer)
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, 'icon.png'));

  console.log('Creating standard Windows icon.ico...');
  const icoBuffer = createIcoFromPngBuffers(pngBuffers, sizes);
  fs.writeFileSync(path.join(__dirname, 'icon.ico'), icoBuffer);

  console.log('✅ icon.ico & icon.png successfully generated with official logo!');
}

generateAppIcons().catch((err) => {
  console.error('Failed to generate icon.ico:', err);
  process.exit(1);
});

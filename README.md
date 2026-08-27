<div align="center">

# 📄 PDFLab — by reza

**The 100% Offline, Private, Free & Open-Source PDF Utility & Editor for Windows**

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0)
[![Platform](https://img.shields.io/badge/Platform-Windows%2010%20%7C%2011%20(x64)-0078D6?style=flat-square&logo=windows)](https://github.com/dev-byreza/PDFLab-byreza)
[![Electron](https://img.shields.io/badge/Electron-34.x-47848F?style=flat-square&logo=electron)](https://www.electronjs.org/)
[![Offline First](https://img.shields.io/badge/Processing-100%25%20Offline-success?style=flat-square)](https://github.com/dev-byreza/PDFLab-byreza)
[![Privacy](https://img.shields.io/badge/Privacy-Zero%20Uploads%20%2F%20No%20Telemetry-orange?style=flat-square)](https://github.com/dev-byreza/PDFLab-byreza)
[![Version](https://img.shields.io/badge/Release-v1.0.0-green.svg?style=flat-square)](https://github.com/dev-byreza/PDFLab-byreza/releases)

---

### 🛡️ *Private. Offline. Free. Simple.*

**PDFLab** is a modern Windows desktop application designed to solve all your day-to-day PDF tasks with **zero cloud dependencies, zero subscriptions, zero ads, and zero telemetry**. All processing occurs purely on your local machine using your CPU.

[Features](#-key-features) • [Installation](#-installation--downloads) • [Quick Start](#-quick-start-for-developers) • [Offline Guarantee](#-privacy--security-guarantee) • [Shortcuts](#-keyboard-shortcuts) • [License](#-license)

---

</div>

## 📌 Ringkasan Singkat (Bahasa Indonesia)

> **PDFLab by reza** adalah aplikasi utilitas & editor PDF desktop gratis, modern, privat, dan **100% offline** untuk Windows 10 & 11 (x64). 
> Menggabungkan fungsi *PDF Viewer, Merge, Split, Page Organizer, Smart Compression, PDF/Image Converter, Offline OCR (mengubah scan menjadi PDF editable/searchable), PDF Markup & Annotation Editor, Visual Signature, AES-256 Encryption, hingga Batch Processing*. Dokumen Anda tidak pernah diunggah ke internet dan seluruh proses komputasi dilakukan secara lokal di komputer Anda.

---

## ✨ Key Features

PDFLab brings together a complete suite of PDF manipulation and editing tools in a unified, Windows 11 Fluent Design interface:

### 📑 1. View & Organize
* **High-Performance Offline PDF Viewer**: Instant rendering with lazy thumbnail loading, text search (`Ctrl+F`), zoom controls, fit width/page, and page jumping.
* **Merge PDF**: Combine multiple PDF files into one clean document with custom page ranges (e.g. `1-5, 8, 10-12`) and drag-and-drop file reordering.
* **Split & Extract**: Split by custom ranges, split every *N* pages, extract specific pages, or burst every page into individual PDF files.
* **Organize Pages**: Visual thumbnail workspace to reorder pages, rotate 90° clockwise/counter-clockwise, duplicate, and delete pages with **Undo/Redo** support.

### ⚡ 2. Optimize & Convert
* **Smart PDF Compression**:
  * **Preset Modes**: Low, Medium (~50% reduction), and High compression.
  * **Target Size Mode**: Specify a target file size (e.g., `5 MB`) with intelligent image resampling and font stream optimization.
* **PDF → Image**: Convert PDF pages into high-resolution **PNG** or **JPG** formats with custom DPI settings.
* **Image → PDF**: Convert multiple images/photos into formatted PDFs with custom paper sizes (A4, A3, Letter, Legal, etc.), margins, and orientations.

### 🧠 3. Intelligence & OCR (100% Offline)
* **Local CPU OCR Engine**: Convert scanned documents and photo PDFs into **live editable & searchable PDFs** without sending a single byte to the cloud.
* **Multi-Language Support**: English and Bahasa Indonesia.
* **Preprocessing Pipeline**: Automatic deskew, rotation correction, grayscale conversion, and contrast enhancement.
* **Live Editable Document Sheet**: Edit recognized text directly before saving, or export as searchable PDF / plain text.

### ✏️ 4. Edit & Visual Signature
* **PDF Markup & Annotation**: Add custom text boxes, highlights, rectangles, circles, freehand drawings, and insert image stamps onto existing PDF pages.
* **Visual Signature Manager**: Draw your signature directly with a digital pen or upload an image stamp. Save signatures to your private local library and stamp them onto any PDF page with resize and rotate controls.

### 🔒 5. Security & Privacy
* **Protect PDF**: Secure confidential documents with standard AES-256 password encryption completely offline.
* **Unlock PDF**: Safely remove password restrictions from encrypted PDFs (when the valid password is provided).
* **Zero Logging**: Passwords and document contents are strictly ephemeral and never stored in logs or temporary files.

### ⚙️ 6. System & Automation
* **Batch Processing**: Run mass compression, page rotation, image conversion, or OCR across dozens of documents simultaneously.
* **Plugin Architecture**: Extend functionality via official and third-party local `.pdflab-plugin` extensions.
* **Local Private History**: Track local file actions with customizable auto-clear policies (7, 30, 90 days, or never).
* **Bilingual UI**: Seamless instant switching between **English** and **Bahasa Indonesia**.
* **Modern Windows 11 Design**: Acrylic/Mica dark and light themes, custom frameless window controls, and keyboard accessibility.

---

## 📸 Interface Preview

```
+--------------------------------------------------------------------------------+
|  [Logo] PDFLab — by reza  [v1.0.0]        [🔍 Search tools...]   🌐 EN | 🌙 | _ □ ✕ |
+--------------------------------------------------------------------------------+
|  OVERVIEW           |                                                          |
|  • Home Dashboard   |   📄 Drag & Drop PDF or Images Here                      |
|                     |   ----------------------------------------------------   |
|  VIEW & ORGANIZE    |   [ 📖 Viewer ]  [ 🔗 Merge ]  [ ✂️ Split ] [ 🗂️ Organize ] |
|  • PDF Viewer       |                                                          |
|  • Organize Pages   |   OPTIMIZE & CONVERT                                     |
|  • Merge PDF        |   [ 🗜️ Compress ] [ 🖼️ PDF to Img ] [ 📄 Img to PDF ]       |
|  • Split PDF        |                                                          |
|                     |   INTELLIGENCE & EDIT                                    |
|  OPTIMIZE & CONVERT |   [ 🧠 Offline OCR ] [ ✏️ Edit PDF ] [ ✍️ Signature ]       |
|  • Compress PDF     |                                                          |
|  • PDF -> Image     |   SECURITY & BATCH                                       |
|  • Image -> PDF     |   [ 🔒 Protect ] [ 🔓 Unlock ] [ ⚡ Batch Queue ]        |
|                     |                                                          |
|  INTELLIGENCE & EDIT|                                                          |
|  • Offline OCR      |                                                          |
|  • Edit PDF         |                                                          |
|  • Signature        |                                                          |
|                     |                                                          |
|  SYSTEM             |                                                          |
|  • Batch Queue      |                                                          |
|  • Plugin Manager   |                                                          |
|  • Settings         |                                                          |
+--------------------------------------------------------------------------------+
|  PDFLab by reza • 100% Offline • Private & Open Source (GPLv3) • Zero Telemetry |
+--------------------------------------------------------------------------------+
```

---

## 🚀 Installation & Downloads

PDFLab is built natively for **Windows 10 and Windows 11 (64-bit)**.

### Download Binaries

Grab the latest release from the [**Releases Page**](https://github.com/dev-byreza/PDFLab-byreza/releases):

| Distribution | Type | Description |
| :--- | :--- | :--- |
| **`PDFLab by reza Setup 1.0.0.exe`** | NSIS Installer | Standard Windows installer with Start Menu and Desktop shortcuts. |
| **`PDFLab by reza 1.0.0.exe`** | Portable | Standalone executable, runs immediately without installation. |

---

## 🛠️ Tech Stack & Architecture

PDFLab is engineered for speed, privacy, and local execution:

* **Host Environment**: [Electron](https://www.electronjs.org/) (Chromium + Node.js runtime)
* **PDF Rendering Engine**: [PDF.js (pdfjs-dist)](https://mozilla.github.io/pdf.js/)
* **PDF Manipulation Core**: [pdf-lib](https://pdf-lib.js.org/)
* **Document Generation**: [jsPDF](https://github.com/parallax/jsPDF)
* **Image Processing**: HTML5 Canvas & [Sharp](https://sharp.pixelplumbing.com/)
* **Packaging**: [electron-builder](https://www.electron.build/)
* **Styling**: Vanilla Modern CSS with Windows 11 Fluent Design & Mica Glassmorphism

---

## 💻 Quick Start for Developers

To run and build PDFLab from source:

### 1. Prerequisites
* [Node.js](https://nodejs.org/) (v18.x or v20.x recommended)
* [npm](https://www.npmjs.com/) (v9.x or later)
* Git

### 2. Clone Repository
```bash
git clone https://github.com/dev-byreza/PDFLab-byreza.git
cd "PDFLab by reza"
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run in Development Mode
```bash
npm start
```

### 5. Build Windows Distribution (.exe / Installer / Portable)
```bash
npm run build
```
The compiled output will be generated in the `./dist/` directory.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Ctrl + O` | Open PDF Document |
| `Ctrl + S` | Save / Export Document |
| `Ctrl + F` | Search text in PDF Viewer |
| `Ctrl + P` | Print Document |
| `Ctrl + Z` | Undo last edit or page organization |
| `Ctrl + Y` | Redo action |
| `Ctrl + +` / `Ctrl + -` | Zoom In / Zoom Out in Viewer |
| `Ctrl + 0` | Fit Page in Viewer |
| `Escape` | Close active modal or cancel action |

---

## 🔒 Privacy & Security Guarantee

PDFLab is built from the ground up on the principle of **Privacy by Design**:

1. **No External Network Calls**: PDFLab contains no tracking pixels, analytics scripts, cloud APIs, or online telemetry.
2. **Local Processing**: Merge, split, compress, edit, and OCR operations execute 100% on your local CPU.
3. **No User Accounts**: No registration, login, or email collection required.
4. **Transparent Code**: Fully open-source under GPLv3. You can inspect every line of code.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **GNU General Public License v3.0 (GPLv3)**. See [`LICENSE`](LICENSE) for more details.

---

## 👤 Author & Attribution

* **Developer**: **reza** ([@dev-byreza](https://github.com/dev-byreza))
* **Repository**: [https://github.com/dev-byreza/PDFLab-byreza](https://github.com/dev-byreza/PDFLab-byreza)
* **Tagline**: *Private. Offline. Free. Simple.*

<div align="center">
  <sub>Built with ❤️ for privacy and seamless PDF workflows on Windows.</sub>
</div>

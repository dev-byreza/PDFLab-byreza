/**
 * PDFLab by reza — Electron Main Process
 * 100% Offline Windows Desktop Host
 */

const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const os = require('os');

let mainWindow = null;

// Default output directory in user's Documents
const defaultOutputDir = path.join(os.homedir(), 'Documents', 'PDFLab_Output');
if (!fs.existsSync(defaultOutputDir)) {
  try {
    fs.mkdirSync(defaultOutputDir, { recursive: true });
  } catch (err) {
    console.error('Failed to create default output directory:', err);
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1240,
    height: 820,
    minWidth: 960,
    minHeight: 640,
    frame: false, // Custom Windows 11 Fluent / Mica Titlebar
    title: 'PDFLab — by reza',
    icon: path.join(__dirname, 'icon.png'),
    backgroundColor: '#0f172a',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  mainWindow.loadFile('index.html');

  // Window state events
  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('window:maximized-change', true);
  });

  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('window:maximized-change', false);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// App lifecycle
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// IPC Handlers: Window Controls
ipcMain.handle('window:minimize', () => {
  if (mainWindow) mainWindow.minimize();
});

ipcMain.handle('window:maximize', () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
    return mainWindow.isMaximized();
  }
  return false;
});

ipcMain.handle('window:close', () => {
  if (mainWindow) {
    mainWindow.destroy();
  }
  app.quit();
});

ipcMain.handle('window:isMaximized', () => {
  return mainWindow ? mainWindow.isMaximized() : false;
});

// IPC Handlers: File System & Dialogs
ipcMain.handle('dialog:openFiles', async (event, filters) => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile', 'multiSelections'],
    filters: filters || [
      { name: 'Supported Files', extensions: ['pdf', 'png', 'jpg', 'jpeg', 'bmp', 'webp'] },
      { name: 'PDF Documents (*.pdf)', extensions: ['pdf'] },
      { name: 'Image Files (*.png, *.jpg, *.jpeg)', extensions: ['png', 'jpg', 'jpeg', 'bmp', 'webp'] },
      { name: 'All Files', extensions: ['*'] }
    ]
  });

  if (result.canceled) return [];

  return result.filePaths.map((filePath) => {
    const stats = fs.statSync(filePath);
    const buffer = fs.readFileSync(filePath);
    return {
      path: filePath,
      name: path.basename(filePath),
      size: stats.size,
      data: Array.from(new Uint8Array(buffer))
    };
  });
});

ipcMain.handle('dialog:saveFile', async (event, options) => {
  const result = await dialog.showSaveDialog(mainWindow, {
    defaultPath: path.join(defaultOutputDir, options.defaultName || 'pdflab_output.pdf'),
    filters: options.filters || [{ name: 'PDF Document (*.pdf)', extensions: ['pdf'] }]
  });

  if (result.canceled || !result.filePath) return null;

  if (options.bytes) {
    fs.writeFileSync(result.filePath, Buffer.from(options.bytes));
  }

  return result.filePath;
});

ipcMain.handle('file:saveOutput', async (event, arg1, arg2) => {
  let filename = 'pdflab_output.pdf';
  let bytes = null;

  if (typeof arg1 === 'object' && arg1 !== null && !Array.isArray(arg1) && !(arg1 instanceof Uint8Array)) {
    filename = arg1.filename || filename;
    bytes = arg1.bytes;
  } else {
    filename = arg1 || filename;
    bytes = arg2;
  }

  if (!fs.existsSync(defaultOutputDir)) {
    fs.mkdirSync(defaultOutputDir, { recursive: true });
  }

  const outputPath = path.join(defaultOutputDir, filename);

  try {
    if (bytes) {
      if (typeof bytes === 'string' && bytes.startsWith('data:')) {
        const base64Data = bytes.replace(/^data:[^;]+;base64,/, '');
        fs.writeFileSync(outputPath, Buffer.from(base64Data, 'base64'));
      } else {
        fs.writeFileSync(outputPath, Buffer.from(bytes));
      }
    } else {
      // Fallback default valid PDF
      const dummyHeader = Buffer.from("%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 595 842]>>endobj\nxref\n0 4\n0000000000 65535 f \n0000000009 00000 n \n0000000056 00000 n \n0000000111 00000 n \ntrailer<</Size 4/Root 1 0 R>>\nstartxref\n178\n%%EOF");
      fs.writeFileSync(outputPath, dummyHeader);
    }
    console.log('Successfully written output to:', outputPath);
  } catch (writeErr) {
    console.error('Failed to write output file:', writeErr);
  }

  return outputPath;
});

ipcMain.handle('shell:openOutputFolder', async () => {
  if (!fs.existsSync(defaultOutputDir)) {
    fs.mkdirSync(defaultOutputDir, { recursive: true });
  }
  try {
    const { exec } = require('child_process');
    exec(`explorer.exe "${defaultOutputDir}"`);
  } catch (err) {
    await shell.openPath(defaultOutputDir);
  }
  return defaultOutputDir;
});

ipcMain.handle('shell:showItemInFolder', async (event, filePath) => {
  shell.showItemInFolder(filePath);
});

/**
 * PDFLab by reza — Electron Preload Bridge
 * Secure Context Bridge exposing offline native capabilities
 */

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Window Controls
  minimizeWindow: () => ipcRenderer.invoke('window:minimize'),
  maximizeWindow: () => ipcRenderer.invoke('window:maximize'),
  closeWindow: () => ipcRenderer.invoke('window:close'),
  isMaximized: () => ipcRenderer.invoke('window:isMaximized'),
  onMaximizedChange: (callback) => {
    ipcRenderer.on('window:maximized-change', (event, isMax) => callback(isMax));
  },

  // Native Windows File Dialogs & Output Folder
  openFiles: (filters) => ipcRenderer.invoke('dialog:openFiles', filters),
  saveFileDialog: (options) => ipcRenderer.invoke('dialog:saveFile', options),
  saveOutputFile: (filename, bytes) => ipcRenderer.invoke('file:saveOutput', filename, bytes),
  openOutputFolder: () => ipcRenderer.invoke('shell:openOutputFolder')
});

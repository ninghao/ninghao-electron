const { app, BrowserWindow, ipcMain } = require('electron')
const window = require('./demo/window')
const path = require('path')

app.on('ready', () => {
  window.createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (window.mainWindow === null) {
    window.createWindow()
  }
})

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})
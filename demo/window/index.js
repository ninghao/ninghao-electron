const { BrowserWindow } = require('electron')

let mainWindow

function createWindow() {
  this.mainWindow = new BrowserWindow({
    width: 960,
    height: 600,
    minWidth: 830,
    minHeight: 500,
    backgroundColor: '#f8f8f8'
  })

  this.mainWindow.loadURL(`file://${__dirname}/main_window.html`)

  this.mainWindow.on('closed', () => {
    this.mainWindow = null
  })
}

module.exports = {
  createWindow
}
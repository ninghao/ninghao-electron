const { BrowserWindow } = require('electron')

let mainWindow, childWindow

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

  childWindow = new BrowserWindow({
    width: 600,
    height: 300,
  })

  childWindow.loadURL(`file://${__dirname}/child_window.html`)
}

module.exports = {
  createWindow
}
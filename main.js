const { app, BrowserWindow } = require('electron')

let win

const createWindow = () => {
  win = new BrowserWindow()

  win.loadURL('https://ninghao.net')
}

app.on('ready', createWindow)
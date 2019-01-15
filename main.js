const { app, BrowserWindow } = require('electron')

let win

const createWindow = () => {
  win = new BrowserWindow({
    width: 960,
    height: 600,
    minWidth: 830,
    minHeight: 500,
    backgroundColor: '#f8f8f8'
  })

  win.loadURL(`file://${__dirname}/main.html`)
}

app.on('ready', createWindow)
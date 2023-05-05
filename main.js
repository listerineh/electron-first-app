const { app, BrowserWindow } = require('electron')
const { setMainMenu } = require('./menu.js')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 800
  })

  win.loadFile('index.html')
}

setMainMenu()

app.whenReady().then(() => {
  createWindow()
})

const { app } = require('electron')

const Window = require('./Window')

require('electron-reload')(__dirname)

function main() {
  let mainWindow = new Window({ file: 'index.html' })

  let addTodoWin = new Window({
    file: 'add.html',
    width: 400,
    height: 400,
    parent: mainWindow,
  })
}

app.on('ready', main)

app.on('window-all-closed', () => {
  app.quit()
})

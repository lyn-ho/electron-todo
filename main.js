const path = require('path')
const { app } = require('electron')

const Window = require('./Window')
const DataStore = require('./DataStore')

require('electron-reload')(__dirname)

const todosData = new DataStore({ name: 'Todos Main' })

function main() {
  let mainWindow = new Window({ file: path.join('renderer', 'index.html') })

  todosData
    .addTodo('create todo app')
    .addTodo('another todo')
    .addTodo('one more todo')
    .addTodo('another todo')

  console.log(todosData.todos)
}

app.on('ready', main)

app.on('window-all-closed', () => {
  app.quit()
})

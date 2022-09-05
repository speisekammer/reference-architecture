import React, { ReactElement } from 'react'
import './App.css'
import TodoApp from './components/TodoApp/TodoApp'
import TaskContextProvider from './components/TaskContextProvider'

function App (): ReactElement {
  return (
    <div className="App">
      <TaskContextProvider>
        <TodoApp />
      </TaskContextProvider>
    </div>
  )
}

export default App

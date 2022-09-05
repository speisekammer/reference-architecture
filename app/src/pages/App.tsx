import React, { ReactElement } from 'react'
import '../App.css'
import TodoApp from '../components/organisms/TodoApp/TodoApp'
import TaskContextProvider from '../components/providers/TaskContextProvider'

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

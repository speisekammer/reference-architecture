import React, { ReactElement, useEffect, useState } from 'react'
import './App.css'
import { FirestoreTaskPersistence } from 'firebase-gateway'
import { TaskUseCases, TaskRepresentation } from 'interactors'
import { TaskPresenter } from './presenter/TaskPresenter'
import TodoApp from './components/TodoApp/TodoApp'

function App (): ReactElement {
  const [taskUseCases, setTaskUseCases] = useState<TaskUseCases>()
  const [tasks, setTasks] = useState<TaskRepresentation[]>([])

  useEffect(() => {
    if (taskUseCases == null) {
      const firestoreTaskPersistence = new FirestoreTaskPersistence()
      const presenter = new TaskPresenter(setTasks)
      const taskUseCases1 = new TaskUseCases(presenter, firestoreTaskPersistence)
      taskUseCases1.listenToTaskUpdates()
      setTaskUseCases(taskUseCases1)
    }
  }, [taskUseCases])

  const addTask = (task: TaskRepresentation): void => {
    if (taskUseCases !== undefined) {
      taskUseCases.addTask(task).then(() => {
        console.log('added task')
      }).catch(console.error)
    }
  }

  const exampleTask: TaskRepresentation = {
    checked: false,
    title: 'hallo',
    description: 'welt'
  }

  return (
    <div className="App">
      <TodoApp tasks={tasks} handleClick={() => addTask(exampleTask)}/>
    </div>
  )
}

export default App

import React, { ReactElement, useEffect, useState } from 'react'
import './App.css'
import { FirebaseGateway } from 'firebase-gateway'
import { TaskManager, TaskRepresentation } from 'interactors'
import { TaskPresenter } from './presenter/TaskPresenter'
import { TaskList } from './components/TaskList'

function App (): ReactElement {
  const [taskManager, setTaskManager] = useState<TaskManager>()
  const [tasks, setTasks] = useState<TaskRepresentation[]>([])

  useEffect(() => {
    if (taskManager == null) {
      const gateway = new FirebaseGateway()
      const presenter = new TaskPresenter(setTasks)
      const taskManager = new TaskManager(presenter, gateway)
      taskManager.listenToTaskUpdates()
      setTaskManager(taskManager)
    }
  }, [taskManager])

  const addTask = (task: TaskRepresentation): void => {
    try {
      if (taskManager !== undefined) {
        taskManager.addTask(task).then(() => {
          console.log('added task')
        }).catch(console.error)
      }
    } catch (e) {
      window.alert(e)
    }
  }

  const exampleTask: TaskRepresentation = {
    checked: false,
    title: 'hallo',
    description: 'welt'
  }

  return (
    <div className="App">
      <header className="App-header">Task-App
      </header>
      <TaskList tasks={tasks}></TaskList>
        <button onClick={() => addTask(exampleTask)}>Create Task</button>
    </div>
  )
}

export default App

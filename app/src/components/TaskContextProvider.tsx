import { FC, ReactNode, useEffect, useState } from 'react'
import { TaskRepresentation, TaskUseCases } from 'interactors'
import { FirestoreTaskPersistence } from 'firebase-gateway'
import { TaskPresenter } from '../presenter/TaskPresenter'
import { TaskContext, TaskContextType } from '../TaskContext'

interface TaskContextProviderProps {
  children: ReactNode
}

const TaskContextProvider: FC<TaskContextProviderProps> = ({ children }) => {
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

  const taskContext: TaskContextType = {
    tasks,
    taskUseCases
  }

  return (<TaskContext.Provider value={taskContext}>
      {children}
      </TaskContext.Provider>)
}

export default TaskContextProvider

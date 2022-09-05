import { FC } from 'react'

import { TaskContext, TaskContextType } from '../../TaskContext'
import { TaskRepresentation, TaskUseCases } from 'interactors'
import { TaskContextProviderProps } from '../../components/TaskContextProvider'

const DummyTaskContextProvider: FC<TaskContextProviderProps> = ({ children }) => {
  const tasks = [
    { id: '1', title: 'A', description: 'B', checked: false },
    { id: '2', title: 'C', description: 'D', checked: false },
    { id: '3', title: 'E', description: 'F', checked: false }
  ]

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const taskUseCases: TaskUseCases = {
    async addTask (_task: TaskRepresentation): Promise<void> { return await Promise.resolve() }
  } as TaskUseCases

  const taskContext: TaskContextType = {
    tasks,
    taskUseCases
  }

  return (<TaskContext.Provider value={taskContext}>
    {children}
  </TaskContext.Provider>)
}

export default DummyTaskContextProvider

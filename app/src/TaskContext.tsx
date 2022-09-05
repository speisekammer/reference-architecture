import { createContext, useContext } from 'react'
import { TaskRepresentation, TaskUseCases } from 'interactors'

export interface TaskContextType {
  tasks: TaskRepresentation[]
  taskUseCases?: TaskUseCases
}

export const TaskContext = createContext<TaskContextType>({ tasks: [], taskUseCases: undefined })

export function useTaskContext (): TaskContextType {
  return useContext(TaskContext)
}

import { TaskRepresentation } from '../models/response/TaskRepresentation'

export interface RequestBoundary {
  addTask: (task: TaskRepresentation) => Promise<void>
  removeTask: (id: string) => Promise<void>
  checkTask: (id: string) => Promise<void>
}

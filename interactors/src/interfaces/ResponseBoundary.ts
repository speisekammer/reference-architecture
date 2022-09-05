import { TaskRepresentation } from '../models/TaskRepresentation'

export interface ResponseBoundary {
  renderTasks: (tasks: TaskRepresentation[]) => void
}

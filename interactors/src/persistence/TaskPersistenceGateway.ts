import { Task } from 'entities'
import { TaskUpdateHandler } from './UpdateHandlers'

export interface TaskPersistenceGateway {
  readTask: (id: string) => Promise<Task>
  writeTask: (task: Task) => Promise<void>
  deleteTask: (id: string) => Promise<void>
  readTasks: () => Promise<Task[]>
  listenToTasks: (updateHandler: TaskUpdateHandler) => void
  stopListeningToTasks: () => void
}

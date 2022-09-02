import { Task } from 'entities'
import { TaskUpdateHandler } from './TaskUpdateHandler'

export interface Persistence {
  readTask: (id: string) => Promise<Task>
  writeTask: (task: Task) => Promise<void>
  deleteTask: (id: string) => Promise<void>
  readTasks: () => Promise<Task[]>
  listenToTasks: (updateHandler: TaskUpdateHandler) => void
  stopListeningToTasks: () => void
}

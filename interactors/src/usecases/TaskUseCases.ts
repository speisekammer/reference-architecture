import { RequestBoundary } from '../interfaces/RequestBoundary'
import { TaskPersistenceGateway } from '../persistence/TaskPersistenceGateway'
import { ResponseBoundary } from '../interfaces/ResponseBoundary'
import { TaskRepresentation } from '../models/TaskRepresentation'
import { Task } from 'entities'
import { fromTaskRepresentation, toTaskRepresentation } from '../mapper/TaskMapper'

export class TaskUseCases implements RequestBoundary {
  taskPersistence: TaskPersistenceGateway
  responseBoundary: ResponseBoundary

  constructor (responseBoundary: ResponseBoundary, taskPersistence: TaskPersistenceGateway) {
    this.taskPersistence = taskPersistence
    this.responseBoundary = responseBoundary
  }

  async addTask (task: TaskRepresentation): Promise<void> {
    return await this.taskPersistence.writeTask(fromTaskRepresentation(task))
  }

  async removeTask (id: string): Promise<void> {
    return await this.taskPersistence.deleteTask(id)
  }

  listenToTaskUpdates (): void {
    return this.taskPersistence.listenToTasks((tasks: Task[]) => this.responseBoundary.renderTasks(toTaskRepresentation(tasks))
    )
  }

  async checkTask (id: string): Promise<void> {
    return await this.taskPersistence.readTask(id).then(async task => {
      task.check()
      return await this.taskPersistence.writeTask(task)
    })
  }
}

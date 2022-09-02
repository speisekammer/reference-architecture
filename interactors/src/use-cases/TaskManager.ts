import { Task } from 'entities'
import { RequestBoundary } from '../interfaces/RequestBoundary'
import { Persistence } from '../persistence/Persistence'
import { ResponseBoundary } from '../interfaces/ResponseBoundary'
import { TaskRepresentation } from '../models/response/TaskRepresentation'

function toTaskRepresentation (tasks: Task[]): TaskRepresentation[] {
  return tasks.map(task => {
    const taskRepresentation: TaskRepresentation = {
      id: task.id,
      title: task.title,
      description: task.description,
      checked: task.checked
    }
    return taskRepresentation
  })
}

function fromTaskRepresentation (taskRepresentation: TaskRepresentation): Task {
  const task: Task = new Task()
  task.id = taskRepresentation.id
  task.description = taskRepresentation.description
  task.title = taskRepresentation.title
  task.checked = taskRepresentation.checked

  return task
}

export class TaskManager implements RequestBoundary {
  taskPersistence: Persistence
  responseBoundary: ResponseBoundary

  constructor (responseBoundary: ResponseBoundary, taskPersistence: Persistence) {
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

import { ResponseBoundary, TaskRepresentation } from 'interactors'

export class TaskPresenter implements ResponseBoundary {
  setDisplayTasks: (tasks: TaskRepresentation[]) => void

  constructor (setTasks: (tasks: TaskRepresentation[]) => void) {
    this.setDisplayTasks = setTasks
  }

  async renderTasks (tasks: TaskRepresentation[]): Promise<void> {
    this.setDisplayTasks(tasks)
    return await Promise.resolve()
  }
}

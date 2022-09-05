import { Task } from 'entities'
import { TaskRepresentation } from '../models/TaskRepresentation'

export function toTaskRepresentation (tasks: Task[]): TaskRepresentation[] {
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

export function fromTaskRepresentation (taskRepresentation: TaskRepresentation): Task {
  const task: Task = new Task()
  task.id = taskRepresentation.id
  task.description = taskRepresentation.description
  task.title = taskRepresentation.title
  task.checked = taskRepresentation.checked

  return task
}

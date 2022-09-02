import { Persistence } from '../persistence/Persistence'
import { Task } from 'entities'
import { TaskManager } from './TaskManager'
import { Unsubscribe } from '../persistence/Unsubscribe'
import { TaskUpdateHandler } from '../persistence/TaskUpdateHandler'
import { ResponseBoundary, TaskRepresentation } from 'src'

class TestResponse implements ResponseBoundary {
  renderTasks (_tasks: TaskRepresentation[]): void {
  }
}

class InMemoryPersistence implements Persistence {
  private tasks: Task[] = []

  async readTask (id: string): Promise<Task> {
    const task = this.tasks.find(task => task.id === id)
    if (task != null) {
      return task
    }
    throw new Error('Task not found')
  }

  async writeTask (task: Task): Promise<void> {
    this.tasks.push(task)
  }

  async deleteTask (id: string): Promise<void> {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  async readTasks (): Promise<Task[]> {
    return await Promise.resolve(this.tasks)
  }

  listenToTasks (_updateHandler: TaskUpdateHandler): Unsubscribe {
    return () => {}
  }

  stopListeningToTasks (): void {
  }
}

describe('TaskManager', () => {
  it('should be possible to set a persistence', () => {
    const response = new TestResponse()
    const persistence = new InMemoryPersistence()
    const taskManager = new TaskManager(response, persistence)
    expect(taskManager.responseBoundary).toBe(response)
    expect(taskManager.taskPersistence).toBe(persistence)
  })
})

import { TaskConverter } from './TaskConverter'
import { Task } from 'entities'

describe('test task converter', () => {
  it('converts to firestore', () => {
    const task = new Task()
    task.title = 'title'
    task.description = 'description'
    task.checked = true
    const firestore = TaskConverter.toFirestore(task)
    expect(firestore).toEqual({ title: 'title', description: 'description', checked: true })
  })
})

import { Task } from './Task'

describe('Task', () => {
  it('can be created', () => {
    const task = new Task()
    expect(task).toBeTruthy()
  })

  it('has a title', () => {
    const task = new Task()
    task.title = 'Test'
    expect(task.title).toBe('Test')
  })

  it('has a description', () => {
    const task = new Task()
    task.description = 'Test'
    expect(task.description).toBe('Test')
  })

  it('new task is not checked', () => {
    const task = new Task()
    expect(task.checked).toBeFalsy()
  })
  it('can be checked', () => {
    const task = new Task()
    task.check()
    expect(task.checked).toBeTruthy()
  })
})

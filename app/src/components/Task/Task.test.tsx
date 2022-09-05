import { render } from '@testing-library/react'
import { Task } from './Task'
import { TaskRepresentation } from 'interactors'

describe('Task', () => {
  it('snapshot', () => {
    const task: TaskRepresentation = {
      id: '1',
      title: 'Test Task',
      description: 'Test Description',
      checked: false
    }
    const view = render(<Task task={task} />)
    expect(view).toMatchSnapshot()
  })
})

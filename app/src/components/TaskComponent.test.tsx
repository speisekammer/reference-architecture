import { render } from '@testing-library/react'
import { TaskComponent } from './TaskComponent'
import { TaskRepresentation } from 'interactors'

describe('Task', () => {
  it('snapshot', () => {
    const task: TaskRepresentation = {
      id: '1',
      title: 'Test Task',
      description: 'Test Description',
      checked: false
    }
    const view = render(<TaskComponent task={task} />)
    expect(view).toMatchSnapshot()
  })
})

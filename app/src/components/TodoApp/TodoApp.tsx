import { TaskRepresentation } from 'interactors'
import { TaskList } from '../TaskList'
import { Button } from '../Button'
import React, { FC } from 'react'

interface TodoAppProps {
  tasks: TaskRepresentation[]
  handleClick: () => void
}

const TodoApp: FC<TodoAppProps> = ({ tasks, handleClick }) => <>
  <header className="App-header">Task-App
  </header>
  <TaskList tasks={tasks}></TaskList>
  <Button handleClick={handleClick}></Button>
</>

export default TodoApp

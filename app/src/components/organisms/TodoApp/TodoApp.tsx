import { TaskList } from '../../molecules/TaskList/TaskList'
import { Button } from '../../atoms/Button/Button'
import React, { FC } from 'react'
import useTodoApp from './useTodoApp'
import { TaskRepresentation } from 'interactors'

const TodoApp: FC = () => {
  const { tasks, taskUseCases } = useTodoApp()

  if (taskUseCases === undefined) {
    return <div>loading...</div>
  }

  const addTask = (task: TaskRepresentation): void => {
    if (taskUseCases !== undefined) {
      taskUseCases.addTask(task).then(() => {
        console.log('added task')
      }).catch(console.error)
    }
  }

  return (<>
  <header className="App-header">Task-App
  </header>
  <TaskList tasks={tasks}></TaskList>
  <Button handleClick={() => addTask({ title: 'A', description: 'B', checked: false })}></Button>
</>)
}

export default TodoApp

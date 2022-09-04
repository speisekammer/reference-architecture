import { FC } from 'react'
import { TaskRepresentation } from 'interactors'

interface TaskProps {
  task: TaskRepresentation
}

export const TaskComponent: FC<TaskProps> = ({ task }) => {
  return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
  )
}

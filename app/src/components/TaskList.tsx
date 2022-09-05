import { FC } from 'react'
import { TaskRepresentation } from 'interactors'
import { Task } from './Task'

interface TaskProps {
  tasks: TaskRepresentation[]
}

export const TaskList: FC<TaskProps> = ({ tasks }) => {
  return (<>
        <span>Tasks</span>
            {tasks.map(task => <Task key={task.id} task={task} />)}
        </>
  )
}

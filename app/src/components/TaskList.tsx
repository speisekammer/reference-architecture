import { FC } from 'react'
import { TaskRepresentation } from 'interactors'
import { TaskComponent } from './TaskComponent'

interface TaskProps {
  tasks: TaskRepresentation[]
}

export const TaskList: FC<TaskProps> = ({ tasks }) => {
  return (<>
        <span>Tasks</span>
            {tasks.map(task => <TaskComponent key={task.id} task={task} />)}
        </>
  )
}

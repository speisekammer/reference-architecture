import {Task} from 'entities'
import {FC} from "react";

type TaskProps = {
    task: Task
}

export const TaskComponent: FC<TaskProps> = ({task}) => {
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    )
}

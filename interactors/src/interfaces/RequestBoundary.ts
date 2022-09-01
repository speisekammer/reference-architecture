import {Task} from "entities";

export interface RequestBoundary {
    addTask(task: Task): Promise<void>
    removeTask(id: string): Promise<void>
    checkTask(id: string): Promise<void>
}

import {Task} from "entities";

export interface Persistence {
    readTask(id: string): Promise<Task>;
    writeTask(task: Task): Promise<void>;
    deleteTask(id: string): Promise<void>;
}

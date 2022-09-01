import {Task} from "entities";

export interface ResponseBoundary {

    renderTask(id: string): Promise<Task>;
    renderTasks(): Promise<Task[]>;

}

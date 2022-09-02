import {TaskRepresentation} from "../models/response/TaskRepresentation";

export interface ResponseBoundary {

    renderTasks(tasks: TaskRepresentation[]): Promise<void>;

}

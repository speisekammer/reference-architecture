import {Task} from "entities";

export type TaskUpdateHandler = (tasks: Task[]) => void;

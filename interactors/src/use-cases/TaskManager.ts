import {Task} from "entities";
import {RequestBoundary} from "../interfaces/RequestBoundary";
import {Persistence} from "../persistence/Persistence";
import {ResponseBoundary} from "../interfaces/ResponseBoundary";

export class TaskManager implements RequestBoundary {

    taskPersistence: Persistence
    responseBoundary: ResponseBoundary

    setPersistence(persistence: Persistence): void {
        this.taskPersistence = persistence
    }

    setResponseBoundary(response: ResponseBoundary): void {
        this.responseBoundary = response
    }

    addTask(task: Task): Promise<void> {
        return this.taskPersistence.writeTask(task)
    }

    removeTask(id: string): Promise<void> {
        return this.taskPersistence.deleteTask(id)
    }

    async listenToTaskUpdates(): Promise<void> {
        await this.taskPersistence.listenToTasks(
            (tasks) => this.responseBoundary.renderTasks(tasks)
        )
    }

    checkTask(id: string): Promise<void> {
        return this.taskPersistence.readTask(id).then(task => {
            task.check()
            return this.taskPersistence.writeTask(task)
        })
    }
}


import {Persistence} from "../persistence/Persistence";
import {Task} from "entities";
import {TaskManager} from "./TaskManager";
import {Unsubscribe} from "../persistence/Unsubscribe";
import {TaskUpdateHandler} from "../persistence/TaskUpdateHandler";

class InMemoryPersistence implements Persistence {
    private tasks: Task[] = [];

    async readTask(id: string): Promise<Task> {
        return this.tasks.find(task => task.id === id);
    }

    async writeTask(task: Task): Promise<void> {
        this.tasks.push(task);
    }

    async deleteTask(id: string): Promise<void> {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    readTasks(): Promise<Task[]> {
        return Promise.resolve(this.tasks);
    }

    listenToTasks(updateHandler: TaskUpdateHandler): Unsubscribe {
        return () => {}
    }

    stopListeningToTasks() {
        return
    }
}

describe('TaskManager', () => {
    it('should be possible to set a persistence', () => {
        const taskManager = new TaskManager()
        const persistence = new InMemoryPersistence()
        taskManager.setPersistence(persistence)
        expect(taskManager.taskPersistence).toBe(persistence)
    })
})

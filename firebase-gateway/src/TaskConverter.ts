import {Task} from "entities";
import {DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

const TaskConverter = {
    toFirestore(task: Task): DocumentData {
        return {id: task.id, title: task.title, description: task.description, checked: task.checked};
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): Task {
        const data = snapshot.data(options)!;

        const t = new Task()
        t.id = snapshot.id
        t.title = data.title
        t.description = data.description
        t.checked = data.checked
        return t as Task
    }
};

export {TaskConverter}

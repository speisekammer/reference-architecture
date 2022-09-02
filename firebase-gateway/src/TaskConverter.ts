import { Task } from 'entities'
import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'

function removeEmpty (obj: Object): Object {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== null).filter(([_, v]) => v !== undefined))
}

const TaskConverter = {
  toFirestore (task: Task): DocumentData {
    return removeEmpty({ title: task.title, description: task.description, checked: task.checked })
  },
  fromFirestore (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Task {
    const data = snapshot.data(options)

    const t = new Task()
    t.id = snapshot.id
    t.title = data.title
    t.description = data.description
    t.checked = data.checked
    return t
  }
}

export { TaskConverter }

import {Persistence, TaskUpdateHandler} from "interactors";
import {Task} from "entities";
import {initializeApp} from "firebase/app";
import {
    addDoc,
    collection,
    doc,
    Firestore,
    getDoc,
    getDocs,
    getFirestore,
    onSnapshot,
    setDoc,
    Unsubscribe
} from "firebase/firestore";
import {TaskConverter} from "./TaskConverter";

export class FirebaseGateway implements Persistence {

    db: Firestore
    unsubscribe: Unsubscribe

    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyApGAOANcYZoERD0ir3SF_Qotr65bQPGjc",
            authDomain: "reference-architecture-3ee5f.firebaseapp.com",
            projectId: "reference-architecture-3ee5f",
            storageBucket: "reference-architecture-3ee5f.appspot.com",
            messagingSenderId: "167286001932",
            appId: "1:167286001932:web:1b6f583a8c4c85b0ef3929"
        };

        const app = initializeApp(firebaseConfig);
        this.db = getFirestore(app);
        if(!this.db) throw new Error('Could not initialize database')
    }


    async readTask(id: string): Promise<Task> {
        if(!this.db) throw new Error('Database not set in readTask')
        const colRef = collection(this.db, "tasks").withConverter(TaskConverter)
        const docRef = doc<Task>(colRef, id);
        const docSnap = await getDoc<Task>(docRef)

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            // doc.data() will be undefined in this case
            throw new Error("Document does not exist.");
        }
    }

    async writeTask(task: Task): Promise<void> {
        if(!this.db) throw new Error('Database not set in writeTask')
        const colRef = collection(this.db, "tasks").withConverter(TaskConverter)
        if(task.id) {
            const docRef = doc<Task>(colRef, task.id);
            return setDoc<Task>(docRef, task)
        } else {
            await addDoc<Task>(colRef, task)
            return Promise.resolve()
        }
    }

    deleteTask(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async readTasks(): Promise<Task[]> {
        if(!this.db) throw new Error('Database not set)')
        const colRef = collection(this.db, "tasks").withConverter(TaskConverter)
        const docSnap = await getDocs<Task>(colRef)
        return docSnap.docs.map(doc => doc.data());
    }


    listenToTasks(updateHandler: TaskUpdateHandler): void {
        console.log("add task listener")
        if(!this.db) throw new Error('Database not set in listenToTasks')

        const colRef = collection(this.db, "tasks").withConverter(TaskConverter)

        this.unsubscribe = onSnapshot(colRef, (snapshot) => {
            updateHandler(snapshot.docs.map(doc => doc.data()));
        })
    }

    stopListeningToTasks(): void {
        if(this.unsubscribe) {
            this.unsubscribe()
        }
    }
}

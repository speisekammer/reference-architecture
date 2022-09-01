import {Persistence} from "interactors";
import {Task} from "entities";
import { initializeApp } from "firebase/app";

import { getFirestore, Firestore, getDoc, doc, collection } from "firebase/firestore";
import {TaskConverter} from "./TaskConverter";

export class FirebaseGateway implements Persistence {

    db: Firestore

    FirebaseGateway() {
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
    }


    async readTask(id: string): Promise<Task> {
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
        throw new Error("Method not implemented.");
    }

    deleteTask(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

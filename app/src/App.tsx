import React from 'react';
import './App.css';
import {FirebaseGateway} from "firebase-gateway";
import {TaskManager} from "interactors";
import { TaskComponent } from './components/TaskComponent';
import {Task} from "entities";

function App() {

  const gateway = new FirebaseGateway()
  const taskManager = new TaskManager()
  taskManager.setPersistence(gateway)

    const task = new Task()
    task.title="Hallo"
    task.description="Welt"

  return (
    <div className="App">
      <header className="App-header">Task-App
      </header>
      <TaskComponent task={task}></TaskComponent>
    </div>
  );
}

export default App;

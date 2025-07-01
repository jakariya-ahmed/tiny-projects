import { Task } from './taskModel.js';
import { Storage } from "./storage.js";

export class TaskManager{
    constructor() {
        this.tasks = [];
    }

    addTask(title){
        const newTask = new Task(title);
        this.tasks.push(newTask);
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        Storage.save(this.tasks);  // Don't forget to save updated tasks
    }
}

    getTasks() {
        return this.tasks;
    }

    
}


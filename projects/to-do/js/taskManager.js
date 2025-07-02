import { Task } from "./taskModel.js";
export class TaskManager{
    constructor() {
        this.tasks = [];
    }

    // add task in task variable
    addTask(title) {
        const newTask = new Task(title);
        this.tasks.push(newTask);
    }

    // Remove task
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    // return task into task properties
    getTasks(){
        return this.tasks;
    }

}
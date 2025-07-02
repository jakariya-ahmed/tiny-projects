import { TaskManager } from "./taskManager.js";
import { Storage } from "./storage.js";
import { UI } from "./ui.js";

// create instant
const taskManager = new TaskManager();
taskManager.tasks = Storage.load();

// Reference input for title
const taskInput = document.querySelector('#task-input');
// Element that hold tasks for display
const taskContainer = document.querySelector('#task-list');

// handle event and create task 
document.querySelector('#add-btn').addEventListener('click', () => {
    const title = taskInput.value.trim();
    
    if (title) {
        taskManager.addTask(title);
        Storage.save(taskManager.getTasks());
        UI.renderTasks(taskManager, taskContainer);
        taskInput.value = '';
    }

});


// Delete the task
taskContainer.addEventListener('click', e => {
    const id = Number(e.target.dataset.id);
    
    if (e.target.classList.contains('delete')) {
        taskManager.deleteTask(id);
    }

    Storage.save(taskManager.getTasks());
    UI.renderTasks(taskManager, taskContainer);
    
});


// render after page reload
UI.renderTasks(taskManager, taskContainer);
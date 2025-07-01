import { TaskManager } from "./taskmanager.js";
import { Storage } from "./storage.js";
import { UI } from "./ui.js";


const taskManager = new TaskManager();
taskManager.tasks = Storage.load();

const taskInput = document.querySelector('#task-input');
const taskContainer = document.querySelector('#task-list');

// Add new task
document.querySelector('#add-btn').addEventListener('click', () => {
    const title = taskInput.value.trim();
    if (title) {
        taskManager.addTask(title);
        Storage.save(taskManager.getTasks());
        UI.renderTasks(taskManager, taskContainer);
        taskInput.value = '';
    }
});


// Deletagted event for toogel + delete
taskContainer.addEventListener('click', e => {
    const id = Number(e.target.dataset.id);
    if (e.target.type === 'checkbox') {
        taskManager.toggleTask(id);
    }
    if (e.target.classList.contains('delete')) {
        taskManager.deleteTask(id);
    }
    Storage.save(taskManager.getTasks());
    UI.renderTasks(taskManager, taskContainer)
});

// Initial render
UI.renderTasks(taskManager, taskContainer);


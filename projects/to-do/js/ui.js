export const UI = {
    renderTasks(taskManager, taskContainer) {
        taskContainer.innerHTML = '';
        taskManager.getTasks().forEach(task => {
            const div = document.createElement('div');
            div.className = 'flex  p-3 mb-2 bg-white rounded shadow-sm border border-gray-100';
            div.innerHTML = `
                <span class="text-gray-800 font-medium"> ${task.title} </span>
                <button data-id="${task.id}" class="delete text-red-500 hover:text-red-700 text-xl"> 🗑️ </button>
            `;
            taskContainer.appendChild(div);
        });
    }
}
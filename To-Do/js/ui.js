export const UI = {
    renderTasks(taskManager, container) {
        container.innerHTML = '';
        taskManager.getTasks().forEach(task => {
            const div = document.createElement('div');
            div.innerHTML = `
                <input type="checkbox" ${task.copleted ? 'checked' : ''} data-id="${task.id}" />
                <span> ${task.title} </span>
                <button data-id="${task.id}" class="delete"> 🗑️ </button>
            `;
            container.appendChild(div);
        })
    }
}


export const Storage = {
    save(tasks) {
        localStorage.setItem('todo_tasks', JSON.stringify(tasks));
    },

    load() {
        return JSON.parse(localStorage.getItem('todo_tasks')) || [];
    }
};

export const Storage = {
    // Save task into localStorage
    save(task) {
        localStorage.setItem('todo_tasks', JSON.stringify(task));
    },


    // all tasks load
    load() {
       return JSON.parse(localStorage.getItem('todo_tasks')) || [];
    }

}
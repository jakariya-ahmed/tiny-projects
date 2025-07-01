export class Task {
    constructor(title) {
        this.id = Date.now();
        this.title = title;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }


}





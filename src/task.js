export default class Task {
    constructor(title, desc, dueDate, priority, isComplete) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = isComplete || false;
        this.id = crypto.randomUUID();
    }

    toggleComplete() {
        // if isComplete is false, return true, else return false;
        this.isComplete = (this.isComplete === false) ? true : false;
    }

    updateInfo(newInfo) {
        // must be in the format ({"key": "update info"})
        // so something like --- task.updateInfo({ title: "New Task"})
        Object.assign(this, newInfo);
    }
}
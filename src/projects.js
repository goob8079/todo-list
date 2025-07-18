import Task from "./task.js";

export default class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        this.id = crypto.randomUUID();
        this.tasks = [];
    }

    addTask(title, desc, dueDate, priority, isComplete = false) {
        const newTask = new Task(title, desc, dueDate, priority, isComplete, crypto.randomUUID);
        this.tasks.push(newTask);
    }

    getTasks() {
        return this.tasks;
    }

    #getTaskByTitle(title) {
        const selectTask = this.tasks.find(task => task.title === title);
        return selectTask;
    }

    updateTasks(title, newInfo) {
        const updateTask = this.#getTaskByTitle(title);
        // if task exists, then update it
        if (updateTask) {
            updateTask.updateInfo(newInfo);
            return true;
        }
        return false;
    }

    deleteTask(taskTitle) {
        const taskIndex = this.tasks.findIndex(task => task.title === title);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            return true;
        }
        return false;
    }
}
import { Task } from "./task.js";

export default class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        this.id = crypto.randomUUID();
        this.tasks = [];
    }

    addTask(title, desc, dueDate, priority, notes, isComplete = false) {
        const newTask = new Task(title, desc, dueDate, priority, notes, isComplete, crypto.randomUUID);
        this.tasks.push(newTask);
    }

    getTasks() {
        return this.tasks;
    }

    #getTaskByID(id) {
        const selectTask = this.tasks.find(task => task.id === id);
        return selectTask;
    }

    updateTasks(id, newInfo) {
        const updateTask = this.#getTaskByID(id);
        // if task exists, then update it
        if (task) {
            updateTask.updateInfo(newInfo);
            return true;
        }
        return false;
    }

    deleteTask(id) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            return true;
        }
        return false;
    }
}
import Task from "./task.js";

export default class Project {
    // saveToLocalStorage is optional
    constructor(projectTitle, saveToLocalStorage = () => {}) {
        this.projectTitle = projectTitle;
        this.tasks = [];
        this.saveToLocalStorage = saveToLocalStorage;
    }

    addTask(title, desc, dueDate, priority, isComplete = false) {
        const newTask = new Task(title, desc, dueDate, priority, isComplete);
        this.tasks.push(newTask);
        this.saveToLocalStorage();
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
            this.saveToLocalStorage();
            return true;
        }
        return false;
    }

    deleteTask(taskTitle) {
        const taskIndex = this.tasks.findIndex(task => task.title === taskTitle);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            this.saveToLocalStorage();
            return true;
        }
        return false;
    }
}
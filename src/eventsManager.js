import Project from "./projects.js";

let defaultProject = new Project("Default");

const newTaskBtn = document.querySelector("#new-task");
const taskModal = document.querySelector(".task-modal");
const projectContents = document.querySelector(".projects-content");
const addProject = document.querySelector("#add-project");
const content = document.querySelector(".content");

const projectManager = (() => {
    const defaultProject = document.createElement("div");
    defaultProject.setAttribute("id", "default-project");
    const defaultProjTitle = document.createElement("p");
    defaultProjTitle.setAttribute("id", "default-proj-title");
    defaultProjTitle.textContent = "Default";

    defaultProjTitle.addEventListener("click", () => {
        
    });
    defaultProject.appendChild(defaultProjTitle);
    projectContents.appendChild(defaultProject);
});

const taskModalManager = (() => {
    const taskForm = document.querySelector("#task-form");
    const taskCancelBtn = document.querySelector("#task-cancel");
    
    newTaskBtn.addEventListener("click", () => {
        taskModal.showModal();
        
        taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const taskTitle = document.querySelector("#task-title").value;
            const taskDesc = document.querySelector("#task-desc").value;
            const taskDueDate = document.querySelector("#task-due-date").value;
            const taskPriority = document.querySelector("#task-priority").value;
            // make sure the title, due date, and priority are not empty
            if (taskTitle && taskDueDate && taskPriority) {
                defaultProject.addTask(taskTitle, taskDesc, taskDueDate, taskPriority, false);
                taskForm.reset();
            }
            taskForm.close();
        });

        taskCancelBtn.addEventListener("click", (e) => {
            e.preventDefault();
            taskForm.reset();
            taskModal.close();
        });
    });
});

export { projectManager, taskModalManager, };
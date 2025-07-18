import Project from "./projects.js";
import { projectsHolder } from "./projectsHolder.js";

let defaultProject = new Project("Default");

const newTaskBtn = document.querySelector("#new-task");
const taskModal = document.querySelector(".task-modal");
const projectModal = document.querySelector(".project-modal");
const projectContents = document.querySelector(".projects-content");
const addProject = document.querySelector("#add-project");
const defaultProjectItem = document.querySelector("#default-project");
const content = document.querySelector(".content");

const projectManager = (() => {
    const projectForm = document.querySelector("#project-form");
    const projectCancelBtn = document.querySelector("#project-cancel");

    addProject.addEventListener("click", (e) => {
        projectModal.showModal();

        projectForm.addEventListener("submit", () => {
            const projectTitle = document.querySelector("#project-title").value;
            if (projectTitle) {
                projectsHolder.addProject(projectTitle);
                projectForm.reset();
            }
            projectModal.close();
        });

        projectCancelBtn.addEventListener("click", (e) => {
            e.preventDefault();
            projectForm.reset();
            projectModal.close();
        });
    });

    defaultProjectItem.addEventListener("click", () => {
        
    });
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
            const taskPriority = document.querySelector("#priority-select").value;
            // make sure the title, due date, and priority are not empty
            if (taskTitle && taskDueDate && taskPriority) {
                defaultProject.addTask(taskTitle, taskDesc, taskDueDate, taskPriority, false);
                taskForm.reset();
            }
            taskModal.close();
        });

        taskCancelBtn.addEventListener("click", (e) => {
            e.preventDefault();
            taskForm.reset();
            taskModal.close();
        });
    });
});

export { projectManager, taskModalManager, };
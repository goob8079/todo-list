import Project from "./project.js";
import { DEFAULT_PROJECT_TITLE, projectsHolder } from "./projectsHolder.js";
import { display, projectsDisplay } from "./display.js";

const newTaskBtn = document.querySelector("#new-task");
const taskModal = document.querySelector(".task-modal");
const projectModal = document.querySelector(".project-modal");
const addProject = document.querySelector("#add-project");

let currentProject = DEFAULT_PROJECT_TITLE;

// both projectManager and taskManager are IIFEs
const projectManager = (() => {
    const projectForm = document.querySelector("#project-form");
    const projectCancelBtn = document.querySelector("#project-cancel");
    
    addProject.addEventListener("click", (e) => {
        projectModal.showModal();
    });
    
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const projectTitle = document.querySelector("#project-title").value;
        if (projectTitle) {
            const newProject = projectsHolder.addProject(projectTitle);
            currentProject = newProject;
            projectsDisplay();
            display(currentProject);
        }
        projectForm.reset();
        projectModal.close();
    });
    
    projectCancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        projectForm.reset();
        projectModal.close();
    });
})();

const taskManager = (() => {
    const taskForm = document.querySelector("#task-form");
    const taskCancelBtn = document.querySelector("#task-cancel");
    
    newTaskBtn.addEventListener("click", () => {
        taskModal.showModal()
    });
        
    taskForm.addEventListener("submit", (e) => {
        const taskTitle = document.querySelector("#task-title").value;
        const taskDesc = document.querySelector("#task-desc").value;
        const taskDueDate = document.querySelector("#task-due-date").value;
        const taskPriority = document.querySelector("#priority-select").value;
        e.preventDefault();
        // make sure the title, due date, and priority are not empty
        if (taskTitle && taskDueDate && taskPriority) {
            currentProject.addTask(taskTitle, taskDesc, taskDueDate, taskPriority, false);
            taskForm.reset();
            display(currentProject);
        }
        taskModal.close();
    });

    taskCancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        taskForm.reset();
        taskModal.close();
    });
})();

const getCurrentProject = () => currentProject;

const setCurrentProject = (project) => {
    currentProject = project;
};

export { projectManager, taskManager, getCurrentProject, setCurrentProject, };
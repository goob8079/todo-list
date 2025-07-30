import { setCurrentProject } from "./eventsManager";
import Project from "./project";
import { projectsHolder } from "./projectsHolder";

const display = (project) => {
    const content = document.querySelector(".content");
    content.innerHTML = "";
    
    const projectContentDiv = document.createElement("div");
    projectContentDiv.setAttribute("class", "project-content-div");
    const projectContentTitle = document.createElement("h1");
    projectContentTitle.setAttribute("id", "project-content-title");
    projectContentTitle.textContent = project.projectTitle;
    projectContentDiv.appendChild(projectContentTitle);
    
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "tasks-container");
    
    project.getTasks().forEach((task) => {
        const taskExit = document.createElement("p");
        taskExit.setAttribute("id", "task-exit");
        taskExit.textContent = "X";
        taskExit.addEventListener("click", () => {
            taskContainer.removeChild(taskItem);
            project.deleteTask(task.title);
        });
        
        const taskItem = document.createElement("div");
        taskItem.setAttribute("id", "task-item");
        
        const taskItemTitle = document.createElement("h2");
        taskItemTitle.setAttribute("id", "task-item-title");
        taskItemTitle.textContent = `${task.title}`;
        
        const taskItemDueDate = document.createElement("p");
        taskItemDueDate.setAttribute("id", "task-item-due-date");
        taskItemDueDate.textContent = `Due date: ${task.dueDate}`;
        
        const taskItemDesc = document.createElement("p");
        taskItemDesc.setAttribute("id", "task-item-desc");
        taskItemDesc.textContent = `Description: ${task.desc}`;
        taskItemDesc.addEventListener("click", () => {
            taskItemDesc.classList.toggle("expanded");
        });
        
        const taskItemPriority = document.createElement("select");
        taskItemPriority.setAttribute("id", "task-item-priority");
        const priorities = ["Low", "Medium", "High"];
        priorities.forEach((level) => {
            const option = document.createElement("option");
            option.value = level;
            option.textContent = `Priority: ${level}`;
            taskItemPriority.appendChild(option);
        });
        taskItemPriority.value = task.priority;
        
        const taskItemComplete = document.createElement("select");
        taskItemComplete.setAttribute("id", "task-item-complete");
        const completeOptions = ["true", "false"];
        completeOptions.forEach((choice) => {
            const option = document.createElement("option");
            option.value = choice;
            option.textContent = `Complete?: ${choice}`;
            taskItemComplete.appendChild(option);
        });
        taskItemComplete.value = task.isComplete;
        taskItem.style.borderTop = "5px solid red";
        
        taskItemComplete.addEventListener("change", () => {
            if (taskItemComplete.value === "false") {
                taskItem.style.borderTop = "5px solid red";
            } else if (taskItemComplete.value === "true") {
                taskItem.style.borderTop = "5px solid green";
            }
        });
        
        taskItem.appendChild(taskExit);
        taskItem.appendChild(taskItemTitle);
        taskItem.appendChild(taskItemDueDate);
        taskItem.appendChild(taskItemDesc);
        taskItem.appendChild(taskItemPriority);
        taskItem.appendChild(taskItemComplete);
        taskContainer.appendChild(taskItem);
    });
    
    projectContentDiv.appendChild(taskContainer);
    content.append(projectContentDiv);
};

const projectsDisplay = () => {
    const projectContents = document.querySelector(".projects-content");
    console.log("project contents: ", projectContents);
    if (!projectContents) {
        console.error(".projects-content not found in DOM");
        return;
    }
    
    const existingRows = projectContents.querySelectorAll(".project-row");
    existingRows.forEach(row => row.remove());

    projectsHolder.getProjects().forEach((project) => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-row");

        const projectName = document.createElement("p");
        projectName.setAttribute("id", "project-name");
        projectName.textContent = project.projectTitle;
        
        const removeProject = document.createElement("div");
        removeProject.setAttribute("id", "remove-project");
        removeProject.textContent = "X";
        
        projectItem.appendChild(projectName);
        projectItem.appendChild(removeProject);
        
        projectName.addEventListener("click", () => {
            setCurrentProject(project);
            display(project);
        });
        
        removeProject.addEventListener("click", () => {
            projectsHolder.deleteProject(project.projectTitle);
            projectsDisplay();
        });

        projectContents.appendChild(projectItem);
    });
};

export { display, projectsDisplay };
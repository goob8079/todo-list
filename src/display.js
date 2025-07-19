import Project from "./project";

const content = document.querySelector(".content");

const display = (project) => {
    content.innerHTML = "";

    const projectContentDiv = document.createElement("div");
    projectContentDiv.setAttribute("class", "project-content-div");
    const projectContentTitle = document.createElement("h1");
    projectContentTitle.setAttribute("id", "project-content-title");
    projectContentTitle.textContent = "Default";
    projectContentDiv.appendChild(projectContentTitle);

    const tasksList = document.createElement("ul");
    tasksList.setAttribute("class", "tasks-list");

    project.getTasks().forEach((task) => {
        const taskItem = document.createElement("li");
        taskItem.textContent = `${task.title} - ${task.dueDate} - ${task.priority}`;
        tasksList.appendChild(taskItem);
    });

    projectContentDiv.appendChild(tasksList);
    content.append(projectContentDiv);
};

export { display };
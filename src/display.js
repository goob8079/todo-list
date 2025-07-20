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

    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "tasks-container");

    project.getTasks().forEach((task) => {
        const taskExit = document.createElement("p");
        taskExit.setAttribute("id", "task-exit");
        taskExit.textContent = "X";

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

export { display };
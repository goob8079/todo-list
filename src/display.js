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
        const taskItem = document.createElement("div");
        taskItem.setAttribute("id", "task-item");

        const taskItemTitle = document.createElement("h2");
        taskItemTitle.setAttribute("id", "task-item-title");
        taskItemTitle.textContent = `${task.title}`;

        const taskItemDueDate = document.createElement("p");
        taskItemDueDate.setAttribute("id", "task-item-due-date");
        taskItemDueDate.textContent = `${task.dueDate}`;

        const taskItemDesc = document.createElement("p");
        taskItemDesc.setAttribute("id", "task-item-desc");
        taskItemDesc.textContent = `${task.desc}`;

        const taskItemPriority = document.createElement("select");
        const priorities = ["Low", "Medium", "High"];
        priorities.forEach((level) => {
            const option = document.createElement("option");
            option.value = level;
            option.textContent = level;
            taskItemPriority.appendChild(option);
        });
        taskItemPriority.value = task.priority;
        console.log(task);
        
        const taskitemcomplete = document.createElement("select");
        const completeOptions = ["true", "false"];
        completeOptions.forEach((choice) => {
            const option = document.createElement("option");
            option.value = choice;
            option.textContent = choice;
            taskitemcomplete.appendChild(option);
        });
        taskitemcomplete.value = task.isComplete;

        taskItem.appendChild(taskItemTitle);
        taskItem.appendChild(taskItemDueDate);
        taskItem.appendChild(taskItemDesc);
        taskItem.appendChild(taskItemPriority);
        taskItem.appendChild(taskitemcomplete);
        taskContainer.appendChild(taskItem);
    });

    projectContentDiv.appendChild(taskContainer);
    content.append(projectContentDiv);
};

export { display };
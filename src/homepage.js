const content = document.querySelector(".content");

export function homepage() {
    const tasksDiv = document.createElement("div");
    tasksDiv.setAttribute("class", "tasks-div");
    const tasksTitle = document.createElement("h1");
    tasksTitle.setAttribute("id", "tasks-title");
    tasksTitle.textContent = "Tasks";
    tasksDiv.appendChild(tasksTitle);
    content.appendChild(tasksDiv);
}
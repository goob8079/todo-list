import "./style.css";
import { display, projectsDisplay } from "./display.js";
import { getCurrentProject, taskManager } from "./eventsManager.js";
import { projectManager } from "./eventsManager.js";

const homeBtn = document.querySelector("#home");

document.addEventListener("DOMContentLoaded", () => {
    display(getCurrentProject());
    projectsDisplay();
});

homeBtn.addEventListener("click", () => {
    display(getCurrentProject());
});

projectManager();
taskManager();

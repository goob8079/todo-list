import "/src/style.css";
import { display, projectsDisplay } from "./display.js";
import { getCurrentProject, taskManager } from "./eventsManager.js";
import { projectManager } from "./eventsManager.js";

document.addEventListener("DOMContentLoaded", () => {
    projectsDisplay();
    display(getCurrentProject());
});
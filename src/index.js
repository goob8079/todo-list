import "./style.css";
import { display } from "./display.js";
import { getCurrentProject, taskManager } from "./eventsManager.js";
import { projectManager } from "./eventsManager.js";

const homeBtn = document.querySelector("#home");

// homeBtn.addEventListener("click", () => {
//     display();
// });

display(getCurrentProject());
projectManager();
taskManager();
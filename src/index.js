import "./style.css";
import { homepage } from "./homepage.js";
import { taskModalManager } from "./eventsManager.js";
import { projectManager } from "./eventsManager.js";

const homeBtn = document.querySelector("#home");

homeBtn.addEventListener("click", () => {
    homepage();
});

homepage();
projectManager();
taskModalManager();
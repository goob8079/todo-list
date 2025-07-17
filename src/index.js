import { homepage } from "./homepage.js";

const homeBtn = document.querySelector("#home");

homeBtn.addEventListener("click", () => {
    homepage();
});

homepage();
import Project from "./project";
import Task from "./task";

const projectsHolder = (() => {
    let projectsList = [];
    
    const saveToLocalStorage = () => {
        localStorage.setItem("projects", JSON.stringify(projectsList));
    }

    const retrieveFromLocalStorage = () => {
        const storedData = localStorage.getItem("projects");
        // if there is no data, return nothing
        if (!storedData) return;

        // data is the same as projectsList
        const data = JSON.parse(storedData);
        // new data is stored here, and old data is replaced with this
        const newProjectsList = [];

        for (let project of data) {
            const newProject = new Project(project.projectTitle, saveToLocalStorage);

            for (let taskObj of project.tasks) {
                const taskItem = new Task(taskObj.title, taskObj.desc, taskObj.dueDate, taskObj.priority, taskObj.isComplete);
                newProject.tasks.push(taskItem);
            }
            newProjectsList.push(newProject);
        }
        projectsList = newProjectsList;
    }

    const getProjects = () => {
        return projectsList;
    }

    const addProject = (title) => {
        const newProject = new Project(title);
        projectsList.push(newProject);
        saveToLocalStorage();
        return newProject;
    }

    const deleteProject = (title) => {
        const projectIndex = projectsList.findIndex(project => project.projectTitle === title);
        if (projectIndex !== -1) {
            projectsList.splice(projectIndex, 1);
            saveToLocalStorage();
            return true;
        }
        return false;
    }

    retrieveFromLocalStorage();

    return { addProject, getProjects, deleteProject };
})();

export { projectsHolder };
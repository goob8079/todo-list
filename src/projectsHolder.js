import Project from "./projects";

const projectsHolder = (() => {
    let projectsList = [];

    const addProject = (title) => {
        const newProject = new Project(title);
        projectsList.push(newProject);
    };

    const getProjects = () => {
        return projectsList;
    }

    const deleteProject = (title) => {
        const projectIndex = this.projectsList.findIndex(project => project.title === title);
        if (projectIndex !== -1) {
            this.projectsList.splice(projectIndex, 1);
            return true;
        }
        return false;
    }

    return { addProject, getProjects, deleteProject };
})();

export { projectsHolder };
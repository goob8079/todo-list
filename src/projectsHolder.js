import Project from "./project";

const projectsHolder = (() => {
    let projectsList = [];
    
    const getProjects = () => {
        return projectsList;
    }

    const addProject = (title) => {
        const newProject = new Project(title);
        projectsList.push(newProject);
        return newProject;
    };

    const deleteProject = (title) => {
        const projectIndex = projectsList.findIndex(project => project.projectTitle === title);
        if (projectIndex !== -1) {
            projectsList.splice(projectIndex, 1);
            return true;
        }
        return false;
    }

    return { addProject, getProjects, deleteProject };
})();

export { projectsHolder };
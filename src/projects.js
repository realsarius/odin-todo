import todo from './todos';

// const createProject = () => {};

const projectContentProjects = document.createElement('div');
projectContentProjects.id = 'projectContent';

const project1 = document.createElement('div');
const project2 = document.createElement('div');
const project3 = document.createElement('div');

project1.id = 'project1';
project2.id = 'project2';
project3.id = 'project3';

project1.textContent = 'Project 1';
project1.appendChild(todo);
project2.textContent = 'project2';
project3.textContent = 'project3';

projectContentProjects.appendChild(project1);
projectContentProjects.appendChild(project2);
projectContentProjects.appendChild(project3);

export default projectContentProjects;

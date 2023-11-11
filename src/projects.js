import todo from './todos';

const projectContentProjects = document.createElement('div');
projectContentProjects.id = 'projectContent';

const newProject = document.createElement('div');
const newProjectTitle = document.createElement('h1');
const newProjectAddBtn = document.createElement('i');
const newProjectTodo = document.createElement('div');
const newProjectFlex = document.createElement('div');
const newProjectAddBtnA = document.createElement('a');

const project1 = document.createElement('div');
const project2 = document.createElement('div');
const project3 = document.createElement('div');

const project1Title = document.createElement('h1');
const project1AddBtn = document.createElement('i');
const project1Todo = document.createElement('div');
const project1Flex = document.createElement('div');
const project1AddBtnA = document.createElement('a');
project1Todo.id = 'project1Todo';
project1Title.textContent = 'Project 1';
project1AddBtn.classList.add('fa-solid', 'fa-circle-plus');

project1AddBtnA.appendChild(project1AddBtn);
project1AddBtnA.id = 'addTodoModalBtn';
project1AddBtnA.className = 'addTodoModalBtn';

project1Flex.appendChild(project1Title);
project1Flex.appendChild(project1AddBtnA);
project1Flex.className = 'project1Flex';

project1.appendChild(project1Flex);
project1.appendChild(project1Todo);

project1Todo.appendChild(todo);

project1.id = 'project1';
project2.id = 'project2';
project3.id = 'project3';

// project1.textContent = 'Project 1';
// project1.appendChild(todo);
project2.textContent = 'project2';
project3.textContent = 'project3';

projectContentProjects.appendChild(project1);
// projectContentProjects.appendChild(project2);
// projectContentProjects.appendChild(project3);

export {
  projectContentProjects,
  newProject,
  newProjectTitle,
  newProjectAddBtn,
  newProjectTodo,
  newProjectFlex,
  newProjectAddBtnA,
  todo,
};

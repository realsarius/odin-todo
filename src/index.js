import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import navbar from './nav-bar';
import calendar from './calendar';
import main from './main';
import footer from './footer';
import { board, projectArea } from './board';
import map from './map';

import addTodoModal from './addTodo';
import addProjectModal from './addProject';
import {
  projectContentProjects,
  // newProject,
  // newProjectTitle,
  // newProjectAddBtn,
  // newProjectTodo,
  // newProjectFlex,
  // newProjectAddBtnA,
  todo,
} from './projects';

const root = document.querySelector('.root');
const container = document.createElement('div');

container.className = 'container';

main.appendChild(board);
main.appendChild(map);

container.appendChild(navbar);
container.appendChild(main);
container.appendChild(calendar);
container.appendChild(footer);
container.appendChild(addProjectModal);
container.appendChild(addTodoModal);

root.appendChild(container);
document.querySelector('.navbarMiddle1').style.backgroundColor =
  'rgba(255, 255, 255, 0.1)';
document.querySelector('.navbarMiddle1').style.boxShadow =
  '0 3px 0 #ff5761 inset';
document.querySelector('#map').style.display = 'none';

document.querySelector('#addTodoModalBtn').addEventListener('click', () => {
  addTodoModal.showModal();
});

document.querySelector('#addProjectBtn').addEventListener('click', () => {
  addProjectModal.showModal();
});

document.querySelector('#cancelBtn').addEventListener('click', (e) => {
  e.preventDefault();
  addTodoModal.close();
});

document.querySelector('#projectCancelBtn').addEventListener('click', (e) => {
  e.preventDefault();
  addProjectModal.close();
  addTodoModal.close();
});

document.querySelector('#projectSubmitBtn').addEventListener('click', (e) => {
  e.preventDefault();
  addTodoModal.close();
  addProjectModal.close();
});

document.querySelector('#projectTitle').addEventListener('input', () => {
  if (document.querySelector('#projectTitle').validity.valid) {
    document.querySelector('.projectError').textContent = '';
    document.querySelector('#projectTitle').style.outline =
      '1.5px rgb(156, 156, 255) solid';
    document.querySelector('#projectTitle').style.background =
      'rgba(156, 156, 255, 0.2)';
  } else {
    document.querySelector('.projectError').textContent =
      'At least 3 characters';
    document.querySelector('#projectTitle').style.outline =
      '1.5px rgb(255, 156, 156) solid';
    document.querySelector('#projectTitle').style.background =
      'rgba(255, 156, 156, 0.2)';
  }
});

document.querySelector('#title').addEventListener('input', () => {
  if (document.querySelector('#title').validity.valid) {
    document.querySelector('.titleError').textContent = '';
    document.querySelector('#title').style.outline =
      '1.5px rgb(156, 156, 255) solid';
    document.querySelector('#title').style.background =
      'rgba(156, 156, 255, 0.2)';
  } else {
    document.querySelector('.titleError').textContent = 'At least 3 characters';
    document.querySelector('#title').style.outline =
      '1.5px rgb(255, 156, 156) solid';
    document.querySelector('#title').style.background =
      'rgba(255, 156, 156, 0.2)';
  }
});

let addTodoBtns = document.querySelectorAll('.addTodoModalBtn');
document.querySelector('#projectSubmitBtn').addEventListener('click', (e) => {
  e.preventDefault();
  if (document.querySelector('#projectTitle').value.length > 2) {
    const newProject = document.createElement('div');
    const newProjectTitle = document.createElement('h1');
    const newProjectAddBtn = document.createElement('i');
    const newProjectTodo = document.createElement('div');
    const newProjectFlex = document.createElement('div');
    const newProjectAddBtnA = document.createElement('a');
    const projectTitleInput = document.querySelector('#projectTitle').value;
    newProjectTodo.id = `${projectTitleInput}`;

    newProjectTitle.textContent = projectTitleInput;
    newProjectAddBtn.classList.add('fa-solid', 'fa-circle-plus');

    newProjectAddBtnA.appendChild(newProjectAddBtn);
    newProjectAddBtnA.id = 'addTodoModalBtn';
    newProjectAddBtnA.className = `${projectTitleInput}Btn`;

    newProjectFlex.appendChild(newProjectTitle);
    newProjectFlex.appendChild(newProjectAddBtnA);
    newProjectFlex.className = 'project1Flex';

    newProject.appendChild(newProjectFlex);
    newProject.appendChild(newProjectTodo);

    newProject.id = `${projectTitleInput}Project`;

    // newProjectTodo.appendChild(todo);

    projectContentProjects.appendChild(newProject);

    projectArea.appendChild(projectContentProjects);
    document.querySelector('#projectTitle').value = '';
    addTodoBtns = document.querySelectorAll('#addTodoModalBtn');
    addTodoBtns.forEach((btn) => {
      console.log(btn);
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        addTodoModal.showModal();
      });
    });
    addProjectModal.close();
  } else {
    addProjectModal.showModal();
    console.log('add more');
  }
});

document.querySelector('#submitBtn').addEventListener('click', (e) => {
  e.preventDefault();
  if (document.querySelector('#title').value.length > 2) {
    const todo1 = document.createElement('div');
    const todotitle = document.createElement('h1');
    const tododesc = document.createElement('div');
    const todobottom = document.createElement('div');
    const todoDueDate = document.createElement('div');
    const todoPriority = document.createElement('div');
    const todobottomMore = document.createElement('i');
    const todobottomMoreA = document.createElement('a');

    const todoTitleInput = document.querySelector('#title').value;
    const todoDescInput = document.querySelector('#desc').value;
    const todoDueDateInput = document.querySelector('#date').value;
    const todoPriorityInput = document.querySelector('#priority').value;

    todobottomMore.classList.add('fa-solid', 'fa-ellipsis-vertical');
    todo1.className = 'todo';

    todotitle.textContent = todoTitleInput;

    tododesc.textContent = todoDescInput;

    todoDueDate.textContent = `Due date: ${todoDueDateInput}`;
    todoPriority.textContent = todoPriorityInput;

    todobottomMoreA.appendChild(todobottomMore);
    todobottomMoreA.className = 'todobottomMoreA';

    tododesc.className = 'todo1desc';
    todoDueDate.className = 'todoDueDate';
    todobottom.className = 'todoBottom';
    todoPriority.className = 'todoPriority';
    todobottom.appendChild(todoDueDate);
    todobottom.appendChild(todoPriority);
    todobottom.appendChild(todobottomMoreA);

    todo1.appendChild(todotitle);
    todo1.appendChild(tododesc);
    todo1.appendChild(todobottom);

    // document.querySelector(`${document.querySelector('#projectTitle').value}`)

    todo.appendChild(todo1);
    addTodoModal.close();
  }
});
// NodeList.prototype.addEventListener = function (
//   event_name,
//   callback,
//   useCapture
// ) {
//   for (var i = 0; i < this.length; i++) {
//     this[i].addEventListener(event_name, callback, useCapture);
//   }
// };
addTodoBtns.forEach((btn) => {
  console.log(btn);
});

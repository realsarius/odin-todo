import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import navbar from './nav-bar';
import calendar from './calendar';
import main from './main';
import footer from './footer';
import board from './board';
import map from './map';

import addProjectModal from './addProject';

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

root.appendChild(container);
document.querySelector('.navbarMiddle1').style.backgroundColor =
  'rgba(255, 255, 255, 0.1)';
document.querySelector('.navbarMiddle1').style.boxShadow =
  '0 3px 0 #ff5761 inset';
document.querySelector('#map').style.display = 'none';

document.querySelector('#addProjectBtn').addEventListener('click', () => {
  addProjectModal.showModal();
});

document.getElementById('#priorityLabel').style.display = 'none';

import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import navbar from './nav-bar';
import calendar from './calendar';
import main from './main';
import footer from './footer';

const root = document.querySelector('.root');
const container = document.createElement('div');

container.className = 'container';

container.appendChild(navbar);
container.appendChild(main);
container.appendChild(calendar);
container.appendChild(footer);

root.appendChild(container);

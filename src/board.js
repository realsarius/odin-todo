import { projectContentProjects } from './projects';

const board = document.createElement('div');
board.id = 'board';

const project = document.createElement('div');
const search = document.createElement('div');
const projectArea = document.createElement('div');
project.id = 'project';
search.id = 'search';
projectArea.id = 'projectArea';

const projectContent = document.createElement('div');
const title = document.createElement('div');
const rightSide = document.createElement('div');
const more = document.createElement('i');
const newCategoryButton = document.createElement('button');
newCategoryButton.textContent = 'New Project';
newCategoryButton.id = 'addProjectBtn';

more.classList.add('fa-solid', 'fa-ellipsis-vertical');

title.textContent = 'Corporate website for ULT Algency';
title.id = 'somethingTitle';
rightSide.id = 'rightSide';

projectContent.id = 'projectContent';

const searchContent = document.createElement('div');
const filters = document.createElement('div');
const searchBar = document.createElement('div');
const searchRightSide = document.createElement('div');

const filtersIcon = document.createElement('i');
const quickFilters = document.createElement('div');
const filtersMore = document.createElement('i');
filtersIcon.classList.add('fa-solid', 'fa-filter');
quickFilters.textContent = 'Quick Filters';
filtersMore.classList.add('fa-solid', 'fa-angle-down', 'filtersMore');

quickFilters.className = 'quickFilters';

filters.className = 'filters';
searchBar.id = 'searchBar';
searchRightSide.className = 'searchRightSide';
searchContent.id = 'searchContent';

const searchRightSidePlus = document.createElement('i');
searchRightSidePlus.classList.add('fa-solid', 'fa-circle-plus');

searchRightSide.appendChild(searchRightSidePlus);
filters.appendChild(filtersIcon);
filters.appendChild(quickFilters);
filters.appendChild(filtersMore);

const searchBarInput = document.createElement('input');
const searchBarInputIcon = document.createElement('i');

searchBarInput.setAttribute('type', 'search');
searchBarInput.setAttribute('placeholder', 'Search...');
searchBarInput.id = 'searchBarInput';

searchBarInputIcon.classList.add('fa-solid', 'fa-magnifying-glass');

searchBar.appendChild(searchBarInputIcon);
searchBar.appendChild(searchBarInput);

searchContent.appendChild(filters);
searchContent.appendChild(searchBar);
searchContent.appendChild(searchRightSide);

rightSide.appendChild(more);
rightSide.appendChild(newCategoryButton);
projectContent.appendChild(title);
projectContent.appendChild(rightSide);

search.appendChild(searchContent);
project.appendChild(projectContent);

projectArea.appendChild(projectContentProjects);

board.appendChild(project);
board.appendChild(search);
board.appendChild(projectArea);

export { board, projectArea };

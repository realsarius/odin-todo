const navbar = document.createElement('nav');

const navbarLeft = document.createElement('div');
const navbarMiddle = document.createElement('div');
const navbarRight = document.createElement('div');
navbarLeft.className = 'navbarLeft';

const navbarLeft1 = document.createElement('div');
const navbarLeft2 = document.createElement('div');
navbarLeft1.className = 'navbarLeft1';
const dashboard = document.createElement('i');
dashboard.classList.add('fa-solid', 'fa-table-columns');
navbarLeft1.appendChild(dashboard);

navbarLeft2.textContent = 'Todo-app';

const navbarMiddle1 = document.createElement('div');
const navbarMiddle2 = document.createElement('div');
const navbarMiddle3 = document.createElement('div');
const navbarMiddle4 = document.createElement('div');
navbarMiddle1.className = 'navbarMiddle1';
navbarMiddle2.className = 'navbarMiddle2';
navbarMiddle3.className = 'navbarMiddle3';
navbarMiddle4.className = 'navbarMiddle4';

const navbarMiddle1Icon = document.createElement('i');
const navbarMiddle1Text = document.createElement('div');
const navbarMiddle2Icon = document.createElement('i');
const navbarMiddle2Text = document.createElement('div');
const navbarMiddle3Icon = document.createElement('i');
const navbarMiddle3Text = document.createElement('div');
const navbarMiddle4Icon = document.createElement('i');
const navbarMiddle4Text = document.createElement('div');

navbarMiddle1Icon.classList.add('fa-solid', 'fa-chart-simple');
navbarMiddle2Icon.classList.add('fa-solid', 'fa-map');
navbarMiddle3Icon.classList.add('fa-solid', 'fa-calendar');
navbarMiddle4Icon.classList.add('fa-solid', 'fa-gauge-high');

navbarMiddle1Text.textContent = 'Board';
navbarMiddle2Text.textContent = 'Map';
navbarMiddle3Text.textContent = 'Chronology';
navbarMiddle4Text.textContent = 'Panel';

navbarMiddle1.appendChild(navbarMiddle1Icon);
navbarMiddle1.appendChild(navbarMiddle1Text);
navbarMiddle2.appendChild(navbarMiddle2Icon);
navbarMiddle2.appendChild(navbarMiddle2Text);
navbarMiddle3.appendChild(navbarMiddle3Icon);
navbarMiddle3.appendChild(navbarMiddle3Text);
navbarMiddle4.appendChild(navbarMiddle4Icon);
navbarMiddle4.appendChild(navbarMiddle4Text);

// select board on load

const navbarRight1 = document.createElement('i');
const navbarRight2 = document.createElement('div');

navbarRight1.className = 'notification';
navbarRight1.classList.add('fa-solid', 'fa-bell');

const navbarRight2Profile = document.createElement('div');
navbarRight2Profile.className = 'profile';

const navbarRight2ProfilePicture = document.createElement('img');
const navbarRight2ProfileInfo = document.createElement('div');
const navbarRight2ProfileInfoName = document.createElement('div');
const navbarRight2ProfileInfoRole = document.createElement('div');
const navbarRight2ProfileMore = document.createElement('i');

navbarRight2ProfileMore.classList.add('fa-solid', 'fa-angle-down');

navbarRight2ProfileInfo.className = 'profile-info';

navbarRight2ProfileInfoName.textContent = 'Berkan Sözer';
navbarRight2ProfileInfoRole.textContent = 'Web Developer';
navbarRight2ProfileInfoName.className = 'name';
navbarRight2ProfileInfoRole.className = 'role';

navbarRight2ProfileInfo.appendChild(navbarRight2ProfileInfoName);
navbarRight2ProfileInfo.appendChild(navbarRight2ProfileInfoRole);
navbarRight2Profile.appendChild(navbarRight2ProfilePicture);
navbarRight2Profile.appendChild(navbarRight2ProfileInfo);
navbarRight2Profile.appendChild(navbarRight2ProfileMore);
navbarRight2.appendChild(navbarRight2Profile);

navbarLeft.className = 'navbar-left';
navbarMiddle.className = 'navbar-middle';
navbarRight.className = 'navbar-right';

navbarLeft.appendChild(navbarLeft1);
navbarLeft.appendChild(navbarLeft2);

navbarMiddle.appendChild(navbarMiddle1);
navbarMiddle.appendChild(navbarMiddle2);
navbarMiddle.appendChild(navbarMiddle3);
navbarMiddle.appendChild(navbarMiddle4);

navbarRight.appendChild(navbarRight1);
navbarRight.appendChild(navbarRight2);

navbar.appendChild(navbarLeft);
navbar.appendChild(navbarMiddle);
navbar.appendChild(navbarRight);

navbarMiddle1.addEventListener('click', () => {
  document.querySelector('#map').style.display = 'none';
  document.querySelector('#board').style.display = 'grid';
  navbarMiddle1.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  navbarMiddle2.style.backgroundColor = 'rgba(255, 255, 255, 0.0)';
});

navbarMiddle2.addEventListener('click', () => {
  document.querySelector('#map').style.display = 'grid';
  document.querySelector('#board').style.display = 'none';
  navbarMiddle1.style.backgroundColor = 'rgba(255, 255, 255, 0.0)';
  navbarMiddle2.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
});

export default navbar;

const todo = document.createElement('div');

const todo1 = document.createElement('div');
const todo2 = document.createElement('div');
const todo3 = document.createElement('div');
const todo1title = document.createElement('h1');
const todo1desc = document.createElement('div');
const todo1bottom = document.createElement('div');
const todo1bottomMore = document.createElement('i');

todo1bottomMore.classList.add('fa-solid', 'fa-ellipsis-vertical');

todo.id = 'todo';

todo1.className = 'todo';
todo2.className = 'todo';
todo3.className = 'todo';

todo1title.textContent = 'Sign in flow';
todo1desc.textContent = 'Show email, password. Password recovery..';

todo1desc.className = 'todo1desc';

todo1bottom.className = 'todoBottom';

todo1bottom.appendChild(todo1bottomMore);

todo1.appendChild(todo1title);
todo1.appendChild(todo1desc);
todo1.appendChild(todo1bottom);

todo.appendChild(todo1);
todo.appendChild(todo2);
todo.appendChild(todo3);

export default todo;

const addTodoModal = document.createElement('dialog');
const modalForm = document.createElement('form');
const inputBox1 = document.createElement('div');
const label1 = document.createElement('label');
const input1 = document.createElement('input');
addTodoModal.id = 'addTodoModal';
label1.setAttribute('for', 'title');
label1.textContent = 'Title';
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'title');
input1.setAttribute('id', 'title');

const inputBox2 = document.createElement('div');
const label2 = document.createElement('label');
const input2 = document.createElement('input');
label2.setAttribute('for', 'desc');
label2.textContent = 'Description';
input2.setAttribute('type', 'text');
input2.setAttribute('name', 'desc');
input2.setAttribute('id', 'desc');

const inputBox3 = document.createElement('div');
const label3 = document.createElement('label');
const input3 = document.createElement('input');
label3.setAttribute('for', 'date');
label3.textContent = 'Due Date';
input3.setAttribute('type', 'date');
input3.setAttribute('name', 'date');
input3.setAttribute('id', 'date');

const inputBox4 = document.createElement('div');
const label4 = document.createElement('label');
const input4 = document.createElement('select');
const option1 = document.createElement('option');
const option2 = document.createElement('option');
const option3 = document.createElement('option');
const option4 = document.createElement('option');
inputBox4.id = 'selectInputBox';
option1.setAttribute('value', '');
option1.textContent = 'Select Priority';
option2.setAttribute('value', 'high');
option2.textContent = 'High';
option3.setAttribute('value', 'medium');
option3.textContent = 'Medium';
option4.setAttribute('value', 'low');
option4.textContent = 'Low';
label4.setAttribute('for', 'priority');
label4.textContent = 'Priority';
input4.setAttribute('name', 'priority');
input4.setAttribute('id', 'priority');

input4.appendChild(option1);
input4.appendChild(option2);
input4.appendChild(option3);
input4.appendChild(option4);

inputBox1.className = 'input-box';
inputBox1.appendChild(label1);
inputBox1.appendChild(input1);

inputBox2.className = 'input-box';
inputBox2.appendChild(label2);
inputBox2.appendChild(input2);

inputBox3.className = 'input-box';
inputBox3.appendChild(label3);
inputBox3.appendChild(input3);

inputBox4.className = 'input-box';
// inputBox4.appendChild(label4);
inputBox4.appendChild(input4);

const submitBtnDiv = document.createElement('div');
const submitBtn = document.createElement('button');
const cancelBtn = document.createElement('button');
cancelBtn.textContent = 'Cancel';
cancelBtn.id = 'cancelBtn';
submitBtn.textContent = 'Add Project';
submitBtn.id = 'submitBtn';
submitBtnDiv.className = 'submitBtnDiv';

submitBtnDiv.appendChild(cancelBtn);
submitBtnDiv.appendChild(submitBtn);

modalForm.appendChild(inputBox1);
modalForm.appendChild(inputBox2);
modalForm.appendChild(inputBox3);
modalForm.appendChild(inputBox4);
modalForm.appendChild(submitBtnDiv);

modalForm.setAttribute('action', '#');
modalForm.id = 'modalForm';

addTodoModal.setAttribute('data-backdrop', 'static');

addTodoModal.appendChild(modalForm);

export default addTodoModal;

// searchBarInput.setAttribute('type', 'search');
// searchBarInput.setAttribute('placeholder', 'Search...');

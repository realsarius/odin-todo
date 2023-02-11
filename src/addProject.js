const addProjectModal = document.createElement('dialog');
const modalForm = document.createElement('form');
const inputBox1 = document.createElement('div');
const label1 = document.createElement('label');
const input1 = document.createElement('input');
addProjectModal.id = 'addProjectModal';
label1.setAttribute('for', 'title');
label1.textContent = 'Project Title';
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'title');
input1.setAttribute('id', 'title');

inputBox1.className = 'input-box';
inputBox1.appendChild(label1);
inputBox1.appendChild(input1);

const submitBtnDiv = document.createElement('div');
const submitBtn = document.createElement('button');
const cancelBtn = document.createElement('button');
cancelBtn.textContent = 'Cancel';
cancelBtn.id = 'projectCancelBtn';
submitBtn.textContent = 'Add Project';
submitBtn.id = 'projectSubmitBtn';
submitBtnDiv.className = 'submitBtnDiv';

submitBtnDiv.appendChild(cancelBtn);
submitBtnDiv.appendChild(submitBtn);

modalForm.appendChild(inputBox1);
modalForm.appendChild(submitBtnDiv);

modalForm.setAttribute('action', '#');
modalForm.id = 'projectModalForm';

addProjectModal.appendChild(modalForm);

export default addProjectModal;

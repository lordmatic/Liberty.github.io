// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listener
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(event){


event.preventDefault()

//Todo Div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

//Create Li
const newTodo = document.createElement('li');
newTodo.innerText = 'Oh Yeah';
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

//Check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML ='<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//Check Trash button
const trashButton = document.createElement('button');
trashButton.innerHTML ='<i class="fas fa-trash"></i>';
trashButton.classList.add("complete-btn");
todoDiv.appendChild(trashButton);

//Append To List
todoList.appendChild(todoDiv);
}
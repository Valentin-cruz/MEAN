const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNr = document.querySelector('.todo-nr b')
const items  = todoList.children;
const mainTitle = document.querySelector('.main-title');

//CLICK, SCROLL, RESIZING THE BROWSER

//ATTACH A EVENT LISTENER
// button.addEventListener('click', function () {
//     const newItem = document.createElement('li');
//     newItem.classList.add('item');
//     newItem.innerText = `Item ${items.length + 1}`;
//     todoList.appendChild(newItem);
//     todoNr.innerText = items.length;
// });

button.addEventListener('click', function () {
    mainTitle.classList.toggle('spectacular');
});
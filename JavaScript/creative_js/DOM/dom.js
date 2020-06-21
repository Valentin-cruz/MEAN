// const headers = document.getElementsByTagName('h1');
// const list = document.getElementsByClassName('item');
// const button = document.getElementById('submit');

// console.log(headers);

// const headers = document.querySelector('h1');
// const list = document.querySelector('.item');
// const list = document.querySelector('#submit');

////////////
////////////

// const collectionItems = document.getElementsByClassName('item');
// const todoList = document.getElementById('todo-list');
// const todoNr = document.getElementsByClassName('todo-nr')[0];

// const newItem = document.createElement('li');
// newItem.classList.add('item')
// newItem.innerText = 'item 4';

// const anotherItem = document.createElement('li');
// anotherItem.classList.add('item')
// anotherItem.innerText = 'item 5';

// todoList.appendChild(newItem);
// todoList.appendChild(anotherItem);

// console.log(collectionItems);

// nodelist

const todoList = document.querySelector('#todo-list');
const items = todoList.children;

const todoNr = document.querySelector('.todo-nr');

const newItem = document.createElement('li');
newItem.classList.add('item')
newItem.innerText = 'item 4';

const anotherItem = document.createElement('li');
anotherItem.classList.add('item')
anotherItem.innerText = 'item 5';

todoList.appendChild(newItem);
todoList.appendChild(anotherItem);

//Update items numbers
todoNr.innerText = items.length;

console.log(items)
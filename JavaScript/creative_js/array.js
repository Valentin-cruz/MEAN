let bank = 250;
let newBank = bank;

newBank = 500;

console.log(bank, newBank);

//OBJECT AND ARRAYS REFERENCE TYPES

const names = ['Bill', "John", "Drake"];

const newNames = names;

newNames.push('Mom');

console.log(newNames);

console.log(names);

//---------------------------

const videos = ['hellow AudioWorkletNode', 'javascript']

//SORT
const items = ["banana", "Orange", "Apple", "Mango"];
const rating = [92, 52, 4, 2, 22, 45.6, 10, 80];

// rating.sort(funstion(a, b) {
//     return a - b
// });

// console.log(rating);

const name = 'dev';
cont ;etters = name.split("");

const otherNames = ["johns", "bohn", "jovi"];
const allNames = [...otherNames, "this", "is", "ed"];
console.log(allNames);
console.log('hello world');

//? Variables

let name = 'Val';
console.log(name);

// Cannot be a reserverd keyword
// Should be meaingful 
// Cannot start with a number (1name)
// Cannot contain a space or hyphon (-)
// Are case-sensitive 

let firstName ='Val';
let lastName = 'Cruz';

//? Constant

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

//? Primitives/Value types

//string
//Number
//Boolean
//undefined
//null

let nickname = 'Val'; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean literal
let Name = undefined;
let selectedColor = null;

//? Dynamic Typing

typeof somename
//string
somename=1
//1
typeof somename
//number

//? References type

// Object

let person = {
    name: 'Val',
    age: 30
};

// Dot Notation
person.name = 'John';

// Bracket Notation
let selection = 'name';
person[selection] = 'Bob';

console.log(person);

// Array

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;

console.log(selectedColors);

// Function

//Performing a task
function greet(name, lastname) {
    console.log('Hello ' + name + ' ' + lastname);
}

//Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));
greet('John', 'Smith');
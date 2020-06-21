//?Hoisting

var name;

console.log(name);

name = 'Ed';

console.log(name);

function sayName() {
    console.log('Hellow World');
}

//? Callstack

function sayHello() {
    console.log('hello my name is Val');
}

function sayAge() {
    console.log('my age is 27');
}

function sayAll() {
    sayHello();
    sayAge();
}

sayAll();

console.log('Final');

//? IIFE

(function() {
    console.log('Hello');
})();

console.log('final');

//? SCOPE

//? GLOBAL SCOPE

const firstName = 'Val';
const age = 27;

console.log(firstName);

function sayName() {
    console.log(`Hello  ${firstName}`);
    myAge();

    function myAge(){
        console.log(`my age is ${age}`);
    }
}
sayName();
//? FUNCTION SCOPE

function sayFullName() {
    const fname = 'Bob';
    const age = 30;
    console.log(fname);
    console.log(fname,age);
}

sayFullName();

//? Callbacks, promises and async await

async function getData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'), 3000);
    });

    let result = await promise;
    console.log(result);
}

getData();
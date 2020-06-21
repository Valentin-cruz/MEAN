const bank1 = 100;
const bank2 = 50;

const allBanks = bank1 + bank2;

// const greeting = "John Doe \"Life is good\" ";
const user = "John";
const greeting = `Hey there welcome to ${user}`;

console.log(greeting);

const name = null;

if (name) {
    console.log('This value us truthy')
} else {
    console.log('This value is falsey')
}

// FALSE, 0, "", null, undefined, NaN

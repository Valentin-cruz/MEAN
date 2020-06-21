//for loops

for(let i=0; i < 100; i++){
    console.log(i);

    if(i===20) {
        console.log('hit 20');
        continue;
    }
}

const names = ['bob', 'bill', 'john', 'tim'];

// for (let name of names) {
//     console.log(names.indexOf(name));
// }

for (let name of names) {
    if (name === 'john') {
        console.log('hey')
        break;
    }
    console.log(name);
}

//specifically for arrays
// names.forEach(function(name){
//     console.log(name);
// })

const user = {
    name: 'bob',
    age: 25,
    number: 200,
    money: 1000
}

for (let x in user) {
    console.log(x);
}

console.log(user['number']);

//WHILE, DO WHILE

let i = 0;

while(i < 30) {
    console.log(i);
    i +=2;
}

// do {
//     console.log(i)
//     i++;
// }

// while (10);

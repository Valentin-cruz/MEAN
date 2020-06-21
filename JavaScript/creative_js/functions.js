// function greet(){
//     let name = prompt('What is your name');
//     console.log('Welcome to our website' + name);
// }

// console.log('rest of the code');

// function signUp(){
//     let name = prompt('What is your name');
//     greet();
// }

// signUp();

function max(nr1, nr2){
    if(nr1 > nr2){
        return nr1;
    } else {
        return nr2;
    }
}

let inbox = max(1, 5);
console.log(inbox);
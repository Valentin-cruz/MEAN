//Sync code example

function otherFunct(){
    console.log("we are in anouther funct");
    console.log("do some stuff");
}

console.log("Start");

otherFunct();

console.log("End");

//Async code example

console.log("Start");

setTimeout(() => {
    console.log("We are in the timeout");
}, 5000);

console.log("End");
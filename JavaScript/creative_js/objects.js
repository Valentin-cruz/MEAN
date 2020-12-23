function sayHi() {
    console.log(`hello ther ${name}`);
    changeName();
    console.log(`sayHi is finished`);
}

function changeName() {
    name = "Bobby";
    console.log(`we changed it to ${name}`);
    console.log(`changeName is finished`);
}
let name = "val";

for(let i = 0; i < 10000; i++){
    
}

sayHi();

console.log(`We are done with the code`);
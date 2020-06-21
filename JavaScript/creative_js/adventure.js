// Generate random number
// Give user ability to guess correct number

function guessGame() {
    let randNum = Math.floor(Math.random()*11);
    // console.log(randNum);
    let guess;

    do{
        guess = prompt('Guess a number between 1-10');
        console.log(guess, randNum);
        if(randNum > guess){
            console.log('you are to low');
        }else if(randNum < guess){
            console.log('guesss wass to high');
        }
    }while(guess != randNum)
    console.log('you won');
}

guessGame();
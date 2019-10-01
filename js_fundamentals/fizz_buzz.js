function fizzbuzz(num){
    if (num<0){
        console.log('Parameter must be a positive number')
    }
    else {
        for (var i=1; i<num+1; i++){
            if(i%15 == 0) console.log('FizzBuzz');
            else if (i%3 ==0) console.log('Fizz');
            else if (i%5 ==0) console.log('Buzz');
            else console.log(i);
        }
    }
}
fizzbuzz(-15)
fizzbuzz(15)
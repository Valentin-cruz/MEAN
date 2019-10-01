function bubbleSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var x = 0; x < (array.length - i - 1); x++) {
            //Compare the adjacent positions
            if(array[x] > array[x+1]) { 
                var tmp = array[x];
                array[x] = array[x+1];
                array[x+1] = tmp;
            }
        }
    }
    return array;
}
var x = [4, 22, 62, 3, 1]

console.log(bubbleSort(x));

//Classify each of the following functions according to their Big O Time complexity:
//?#1
function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
// * O(n)

//?#2
function findNth(arr, n){
    console.log(arr[n]);
}
// * O(1)

//?#3
function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}
// * O(n)

//?#4
function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
// * O(n2)
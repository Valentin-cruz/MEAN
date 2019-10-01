function maxMinAvg (arr) {
    var min = arr[0];
    var max = arr[0];
    var avg=0;
    var sum=0;

    // *find min value
    for(var i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    // *find max value
    for(var i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    // *find sum value
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    // *cal avg value and log
    avg=sum/arr.length;
    console.log("The minimum is ", min, ", The maximum is ", max, ", The average is ", avg, ".")
}
maxMinAvg([1, -2, 9, 4])
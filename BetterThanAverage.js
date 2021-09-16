//Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
    for (let i = 0; i < arr.length ;i++){
        sum += arr[i];
    }
    let avg = sum / arr.length;
    for (let i = 0; i < arr.length; i++){
        if(arr[i]>avg){
            count += 1;
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);
// we expect back 4
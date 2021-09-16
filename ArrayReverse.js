// Write a function that will reverse the values an array and return them.

function reverse(arr) {
    let temp = [];
    for (i = 0; i < arr.length; i ++){
        temp.unshift(arr[i]);
    }
    arr = temp;
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

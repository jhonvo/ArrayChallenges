// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

function alwaysHungry(arr) {
    let foodpresence = [];
    for (i=0; i < arr.length; i++){
        if (arr[i]=="food") {
            foodpresence.push("yummy");
        }
        }
    if (foodpresence == ""){
        foodpresence.push("I'm hungry");
    }
    console.log(foodpresence);
    }

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
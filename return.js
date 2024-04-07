function removeEgg(foods) {
    // To remove the last 2 'egg', reverse the array first.

    const foodsCopy = foods.splice();
    const reversedFoods = foodsCopy.reverse(); // Reverse the original array and store it in a new array called 'reversedFoods'

    const result = []; // Create an empty array called 'result' to store the food items without the last two eggs
    let eggsRemoved = 0; // Initialize a variable called 'eggsRemoved' to keep track of how many eggs have been removed

    // Loop through each item in the reversed 'foods' array
    for (let i = 0; i < reversedFoods.length; i++) {
        // Check if the current item is 'egg' and if less than 2 eggs have been removed
        if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
            eggsRemoved++; // Increment the 'eggsRemoved' counter
            continue; // Skip to the next iteration of the loop
        }

        // If the current item is not 'egg' or if 2 eggs have already been removed, add it to the 'result' array
        result.push(reversedFoods[i]); // Add the current food item to the 'result' array
    }

    // At the end, remember to .reverse() back the result to restore the original order of items.
    return result.reverse(); // Reverse the 'result' array back to its original order and return it
}

// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])); // Call the function with an array of foods and log the result

const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];

console.log(removeEgg(foods));
console.log(foods);



















/*function removeEgg(foods) {
    const newArray = []; // Create an empty array called 'newArray' to store the food items without eggs
    let eggRemoved = 0; // Initialize a variable called 'eggRemoved' to keep track of how many eggs have been removed

    // Loop through each item in the 'foods' array
    for (let i = 0; i < foods.length; i++) {
        // Check if the current item is 'egg' and if less than 2 eggs have been removed
        if (foods[i] === 'egg' && eggRemoved < 2) {
            //eggRemoved++; // Increment the 'eggRemoved' counter
            continue; // Skip to the next iteration of the loop
        }
        // If the current item is not 'egg' or if 2 eggs have already been removed, add it to the 'newArray'
        newArray.push(foods[i]); // Add the current food item to the 'newArray'
    }

    return newArray; // Return the 'newArray' containing food items without eggs
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])); // Call the function with an array of foods and log the result */




























/*
function removeEgg(foods) {

    const result = [];

    for (let i=0; i< foods.length; i++) {
       //if the string is eggg, use continue to skip it
       if(foods[i] === 'egg'){
         continue;
       }
       result.push(foods[i]);    
    }

    return result ;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));  */


// Is the JavaScript file sourced? Check in the browser console by
// right clicking and selecting 'Inspect'. If the script is properly
// sourced you will see the log message: 'Script sourced!'.
console.log('Script sourced!');

// * Step One * - Create a variable from user input and conditional statement
  // var animal =
// Once you have the animal variable. Write your conditional statement.
// Use these exact strings: 'Try again.' and 'How did you know?!'.
var animal = prompt("What animal am I thinking of?");

if(animal == "turtle"){
  alert('How did you know?!');
} else {
  alert('Try again.');
}


// * Step Two * - Refactor into a function
// Call the function by passing the animal variable into it
var animal = prompt("What animal am I thinking of?");

animalGuess(animal);

function animalGuess(animalName) {
  if(animalName == "turtle"){
    alert('How did you know?!');
  } else {
    alert('Try again.');
  }
}

// What will this log?
// console.log(animalName);

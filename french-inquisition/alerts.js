// Step One - Variable and conditional statement
var animal = prompt("What animal am I thinking of?");

if(animal == "turtle"){
  alert('How did you know?!');
} else {
  alert('Try again.');
}

// Step Two - Refactor into a function
var animal = prompt("What animal am I thinking of?");

animalGuess(animal);

function animalGuess(animalName) {
  if(animalName == "turtle"){
    alert('How did you know?!');
  } else {
    alert('Try again.');
  }
}

// What would this log?
// console.log(animalName); // Uncaught ReferenceError: animalName is not defined

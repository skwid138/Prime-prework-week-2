
/**
 * We are going to create an application where you create a variable, and then
 * create a function that doubles it!
 *
 * But there is a catch, its going to not just double numbers, but also strings!
 *
 * AND there is even special handling for objects and booleans.
 *
 * Fill in the code below based on the commented lines.
 */

var someNumber = 8;
// make sure to test all the possible inputs.
var someString = 'prime';
var someBool = true;
var falseBool = false;
var someObject = {
	name : 'hunter'
};
var someNothing;

var someArray = [
	1,
	2,
	3
];


/*
console.log(someObject.name);
console.log(typeof someNumber);
console.log(typeof someString);
console.log(typeof someBool);
console.log(typeof someObject);
*/


theDoubler(someNumber);
theDoubler(someString);
theDoubler(someBool);
theDoubler(falseBool);
theDoubler(someObject);
theDoubler(someNothing);
// someNothing and the line below accomplish the same thing, but in my mind the code should be as simple as possible (for humans and computers) so I think the below is a better way
theDoubler();
//theDoubler(theDoubler());

function theDoubler(someInput) {
	// typeof is a built in javascript tool that allows us to find the type of an object
	// for number, we have given an example of how that works
	if (typeof someInput == "number") {
		// if type is number, log that number multiplied by 2
		console.log( someInput * 2 );
		// if type is string pass back that string twice
		// e.g. sending "someString" in, should log "someStringsomeString"
	} else if (typeof someInput == 'string') {
		console.log(someInput + ' ' + someInput);
		// if the user inputs a boolean (true or false)
		// log "I won't double this" if it is false
		// log "Super-duper true" if it is true
	} else if (typeof someInput == 'boolean') {
		if ( someInput == true ) {
			console.log( 'Super-duper true' );
		} else {
			console.log( 'I won\'t double this' );
		}
		// if it's none of those, but it is an object, log "everything is an object"
	} else if (typeof someInput == 'object' ) {
		console.log( 'everything is an Object' );

	// } else if (typeof someInput == 'function') {
	// 	console.log( 'That\'s a function!' )

	// if it is anything else, print out "I can't double this"
	} else {
			console.log( 'I can\'t double this' );
		}

}

// concatinates two strings
function twoWords(someInput) {
	// the way im using this someInput will always be a string, so there's room to improve
	if (typeof someInput == 'string') {
	console.log(someInput.repeat(2));
	} else {
	console.log('Not a String!')
	}
}

// takes integers and multiples them
function twoNums(someInput) {
	if (typeof someInput == 'number' ) {
		console.log(someInput + ' * ' + 2 + ' = ' + someInput * 2);
		// going to run into issues with it converting strings to numbers that should be
		//strings, but ill come back to that if time permits

		// while (typeof numPrompt !== 'number') {
		// 	numPrompt = prompt ('That\'s not a number, please enter a number.')
		// }
	}
}

// checks if a boolean is true or false and logs the result
function boolCheck(someInput) {
	while (true) {
		if (someInput === 'true') {
			console.log('Super-duper true');
			break;
		} else if (someInput === 'false') {
			console.log( 'I won\'t double this' );
			break;
		} else {
			someInput = prompt("That's not a boolean! Please enter 'true' or 'false'.")
		}
	}
}



// creating a function that will prompt the user for input and then log it
function promptInput() {
	var numPrompt = prompt("Please enter a number.");
	twoNums(parseInt(numPrompt));

	var stringPrompt = prompt("Please enter a word.");
	twoWords(stringPrompt)

	var boolPrompt = prompt("Please enter a boolean ('true' or 'false').").toLowerCase();
	boolCheck(boolPrompt);
}

promptInput();

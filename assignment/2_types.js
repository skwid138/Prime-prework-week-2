
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
function twoWords() {
	// the way im using this someInput will always be a string, so there's room to improve
	var someInput = prompt("Please enter a word.");
	if (typeof someInput == 'string') {
	console.log(someInput.repeat(2));
	} else {
	console.log('Not a String!')
	}
}

// takes integers and multiples them
function twoNums() {
	var someInput = prompt("Please enter a number.");
	someInput = parseInt(someInput);
	while (true) {
		if ( isNaN(someInput) == true ) {
			someInput = prompt ('That\'s not a number, please enter a number.');
			someInput = parseInt(someInput);
		} else {
			console.log(someInput + ' * ' + 2 + ' = ' + someInput * 2);
			break;
		}
	}
}

// checks if a boolean is true or false and logs the result
function boolCheck() {
	var someInput = prompt("Please enter a boolean ('true' or 'false').").toLowerCase();
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

// checks if input is an object
function objectCheck() {
	var someInput = buildObject();
	if (typeof someInput == 'object' ) {
		console.log( 'everything is an Object' );
		// this will never not be an object
	} else {
		console.log( 'That\'s not an object!')
	}
}

// collects user input and runs it through a constructor function
function buildObject() {
	var name = prompt('Please enter your name.');
	var age = prompt('what is your age?');

	function createUser(name, age) {
		this.name = name;
		this.age = age;
	}

var user = new createUser (name, age);
console.log(user);
return user;

}

// creating a function that will prompt the user for input and then log it
function promptInput() {
	twoNums();
	twoWords()
	boolCheck();
	objectCheck();
}

promptInput();

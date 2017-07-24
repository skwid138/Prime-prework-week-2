
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

function promptInput() {
	var somePrompt = prompt("Please enter a number, word, true or false").toLowerCase();
}

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
theDoubler();
//theDoubler(theDoubler());
//theDoubler(promptInput);

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

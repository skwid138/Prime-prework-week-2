// We've created a function called "The Doubler"
// the function accepts a bunch of different inputs from the caller.
// It accepts strings, numbers, booleans and objects and tries to double them.

var someNumber = 8;
// make sure to test all the possible inputs.
// var someString =

theDoubler(someNumber);

function theDoubler(someInput) {
	// typeof is a built in javascript tool that allows us to find the type of an object
  // for number, we have given an example of how that works

	if (typeof someInput == "number") {
	    // if type is number, log that number multiplied by 2
	}

	// if type is string pass back that string twice
	// e.g. sending "someString" in, should log "someStringsomeString"


	// if the user inputs a boolean (true or false)
	// log "I won't double this" if it is false
	// log "Super-duper true" if it is true


	// if it's none of those, but it is an object, log "everything is an object"


	// if it is anything else, print out "I can't double this"

}


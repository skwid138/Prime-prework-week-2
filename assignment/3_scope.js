/**
 * OPTIONAL Pro Mode Assignment
 *
 * The below function will produce a couple of different numbers.
 *
 * For this assignment, work through the code without the use of the computer.
 * The objective is to think critically about how the code is executed and
 * see if you can figure out what the answer is for each of the two undefined variables.
 * This will require you to stretch your understanding of how functions, scope,
 * and variables work.
 *
 * This is a very difficult assignment for your first week with Javascript,
 * so don't get frustrated if you test the code out, and don't come to the same
 * conclusion as the code did. Instead, try to work through why the answers are
 * the way they are. If you got them right, then you should order up some
 * pizza and celebrate your understanding of these difficult topics!
 */
    var theNumber = 1;
    console.log(theNumber);

    var michelangelo = function (value) {
        value = (value * 2);
        return value;
    };

    var donatello = function (value, anotherValue) {
        value = anotherValue + value;
        anotherValue = value * anotherValue;
        return anotherValue;
    };

    var leonardo = function (value) {
        var anotherValue = value;
        value *= 4;
        theNumber = value / 2;
        return (value + anotherValue);
    };

    var raphael = function (value, anotherValue, yetAnotherValue) {
        console.log(value, anotherValue, yetAnotherValue);
        value = value * anotherValue + yetAnotherValue;
        return yetAnotherValue;
    };

     alert(michelangelo(theNumber) + leonardo(theNumber));
    //  console.log(michelangelo(theNumber));
    //  console.log(leonardo(theNumber));
    console.log(theNumber);
    // ^ Before running the script, what number would you expect the line above to evaluate to?
/*
michelangelo
1 = value
value = (1 * 2)
return value(2) == 2

leonardo
1 = value
anotherValue == 1
value(1) *= 4 == 4
theNumber(1) = value(4) / 2 == 2
return(4 + 1) == 5

would return 7

*/

    var resultOne = 7; // replace undefined with the result


    theNumber = theNumber * 2;
    // theNumber = 2
    console.log(theNumber);

    alert(donatello(theNumber, 2) - (raphael(3, 2, theNumber)));
    // ^ Before running the script, what number would you expect the line above to evaluate to?
    console.log(donatello(theNumber, 2));
    console.log((raphael(3, 2, theNumber)));
/*
donatello(2, 2) - (raphael(3,2, 2))

donatello
  value(2) = anotherValue(2) + value(2)
  value = 4

  anotherValue(2) = value(4) * anotherValue(2)
  anotherValue = 8

  return anotherValue == 8

raphael
  value(3) = value(3) * anotherValue(2) + yetAnotherValue(2);
  value = 8

  return yetAnotherValue == 2

8 - 2 = 6



theNumber is being ran when leo is called so it's 4 instead of 2

donatello(4, 2) - (raphael(3,2, 4))

donatello
  value(4) = anotherValue(2) + value(4)
  value == 6

  anotherValue(2) = value(4) * anotherValue(2)
anotherValue == 8

  return anotherValue == 8

raphael
  value(3) = value(3) * anotherValue(2) + yetAnotherValue(4)
  value == 10
  return yetAnotherValue == 4




*/

    var resultTwo = 6; // replace undefined with the result

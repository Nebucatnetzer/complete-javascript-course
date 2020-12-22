'use strict';

// Strict mode example
/*
let hasDriversLicense = false;
const passTest = true;

// This code won't run because it uses an undefined variable
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) {
    console.log('I can drive :)');
}
*/

// functions
/*
function logger() {
    console.log('Some default text');
}

logger();


function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(3, 4));
*/


// function declaration and expression
// declaration
/*
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
*/


// arrow function
/*
const calcAge3 = birthYear => 2037 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Max'));
*/

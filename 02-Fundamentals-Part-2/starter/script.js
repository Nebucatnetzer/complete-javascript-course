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


// functions in functions
/*
function cutFruitePieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitePieces(apples);
    const orangePieces = cutFruitePieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

// recap functions
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Max'));
console.log(yearsUntilRetirement(1930, 'Hans'));
*/

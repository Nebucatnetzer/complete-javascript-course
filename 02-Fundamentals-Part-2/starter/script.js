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

// Coding challenge #1
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(averageDolphins, averageKoalas) {
    if (averageDolphins >= 2 * averageKoalas) {
        console.log(`Dolphins win (${averageDolphins} vs. ${averageKoalas})`);
    } else if (averageKoalas >= 2 * averageDolphins){
        console.log(`Koalas win (${averageKoalas} vs. ${averageDolphins})`);
    } else {
        console.log('No team wins.')
    }
}

const firstRound = checkWinner(
    calcAverage(44, 23, 71),
    calcAverage(65, 54, 49));

const secondRound = checkWinner(
    calcAverage(85, 54, 41),
    calcAverage(23, 34, 27));
*/

// arrays

// literal syntax
/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
*/
// not possible because friends is a const
// friends = ['Anna', 'Maya'];

// coding challenge arrays
/*
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}
console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
];

const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2],
];

console.log(tips);
console.log(totals);
*/


// objects
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Muster',
    birthYear:1991,
    job: 'coder',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        return 2037 - this.birthYear;
    }
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

console.log(jonas.calcAge());
*/


// for loop
/*
for (let rep = 1; rep <= 10; rep++){
    console.log(`something to repeat ${rep}`)
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);
*/

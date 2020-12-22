// let
/*
let js = 'amazing';

let firstName = "Jonas";
console.log(firstName)
*/

// var and const

/*
const birthday = "01.01.1970";

// this is not allowed
// const birthday;

// old
var foo = 'bar';
foo = 'baz';
*/

// coding challenge 1
/*
function calculate_bim(height, mass) {
    const bmi = mass / height ** 2;
    return bmi;
}

const markBmi1 = calculate_bim(1.69, 78);
const markBmi2 = calculate_bim(1.88, 95);
const johnBmi1 = calculate_bim(1.95, 92);
const johnBmi2 = calculate_bim(1.75, 85);

const markHigherBmi1 = markBmi1 > johnBmi1;
const markHigherBmi2 = markBmi2 > johnBmi2;

console.log(markBmi1);
console.log(johnBmi1);
console.log(markHigherBmi1)
console.log(markBmi2);
console.log(johnBmi2);
console.log(markHigherBmi2)
*/

// strings and template literals

/*
const year = 2020;
const animal = "bear";

const sentence = year + ' is the year of the ' + animal + '.';
console.log(sentence);

const template_sentence = `${year} is the year of the ${animal}.`
console.log(template_sentence);
*/

// if / else
/*
const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving.")
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young wait another ${yearsLeft} years.`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// Coding Challenge #4

const defaultTip = 0.15;
const specialTip = 0.2;

const menuPrice = Number(prompt("Please enter the menu price."));
const tip = menuPrice >= 50 && menuPrice <= 300 ? menuPrice * defaultTip : menuPrice * specialTip;
console.log(`The bill was ${menuPrice}, the tip was ${tip}, and the total value ${menuPrice + tip}`);

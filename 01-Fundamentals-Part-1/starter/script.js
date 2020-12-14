// let
/*
let js = 'amazing';

let firstName = "Jonas";
console.log(firstName)
*/

// var and const

const birthday = "01.01.1970";

// this is not allowed
// const birthday;

// old
var foo = 'bar';
foo = 'baz';

// coding challenge 1
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

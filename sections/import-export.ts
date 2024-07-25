import { addTwoNumber, divideTwoNumber, subtractTwoNumber, timesTwoNumber } from "../helpers/math-helpers";

let num1 = 15;
let num2 = 20;

let total1 = addTwoNumber(num1, num2);
let total2 = subtractTwoNumber(num1, num2);
let total3 = timesTwoNumber(num1, num2);
let total4 = divideTwoNumber(num1, num2);

console.log(`addTwoNumber: ${total1}`);
console.log(`subtractTwoNumber: ${total2}`);
console.log(`timesTwoNumber: ${total3}`);
console.log(`divideTwoNumber: ${total4}`);

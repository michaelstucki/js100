let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('Enter first number\n'));
let number2 = Number(rlSync.question('Enter second number\n'));
let sum = number1 + number2;

console.log(`${number1} + ${number2} = ${sum}`);

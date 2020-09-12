function getNumber(prompt) {
  let rlSync = require('readline-sync');
  let number = rlSync.question(`Enter the ${prompt} number: `);
  number = parseFloat(number);
  return number;
}

function multiply(x, y) {
  return x * y;
}

let num1 = getNumber("first");
let num2 = getNumber("second");
let result = multiply(num1, num2);

console.log(`${num1} * ${num2} = ${result}`);

let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you? "));
console.log(`You are ${age} years old.`);
for (let adder = 10; adder < 50; adder += 10) {
  console.log(`In ${adder} years, you will be ${age + adder} years old.`);
}

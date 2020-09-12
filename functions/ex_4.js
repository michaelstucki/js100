function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let fact1 = times(1, 1);
let fact2 = times(2, fact1);
let fact3 = times(3, fact2);
let fact4 = times(4, fact3);
let fact5 = times(5, fact4);

console.log(`1! = ${fact1}`);
console.log(`2! = ${fact2}`);
console.log(`3! = ${fact3}`);
console.log(`4! = ${fact4}`);
console.log(`5! = ${fact5}`);

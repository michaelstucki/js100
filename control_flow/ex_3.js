function evenOrOdd(number) {
  if (typeof number != 'number') {
    console.log(`${number} is not a number`);
  } else {
    let result = (number % 2 == 0) ? "even" : "odd";
    console.log(result);  
  }
}

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd('a');


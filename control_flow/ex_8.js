function numberRange(number) {
  let message;

  if (number >= 0 && number <= 50) {
    message = `${number} is between 0 and 50`;
  } else if (number >= 51 && number <= 100) {
    message = `${number} is between 51 and 100`;
  } else if (number > 100) {
    message = `${number} is greater than 100`
  } else {
    message = `${number} is less than 0`
  }

  console.log(message);
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);


function factorial(number) {
  if (number == 0 || number == 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

for (let n = 0; n < 9; n += 1) {
  console.log(`${n}! => ${factorial(n)}`);
}

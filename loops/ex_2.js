function fact(number) {
  let fact = 1;
  for (let n = number; n > 1; n -= 1) {
    fact *= n;
  }
  return fact;
}

for (let n = 0; n < 9; n += 1) {
  console.log(`${n}! => ${fact(n)}`);
}


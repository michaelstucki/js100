let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// line 3 causes the infinite loop.
// the return value of the assignment counter = 1 is 1.
// 1 is truthy.
// so, the conditional always evaluates to true.
// therefore, the loop never is exited.
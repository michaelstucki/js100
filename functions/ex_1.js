let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
// -> 1
// bar inside foo is local to (only available inside foo)

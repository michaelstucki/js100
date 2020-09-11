const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// no error occurs, since the inner const FOO is local to
// {} and therefore not the same as the outer const FOO.

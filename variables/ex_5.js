let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// 'bar' is logged to the console, not 'qux',
// since the inner foo is scoped to the {}.
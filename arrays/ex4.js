let myArray = [
    1, 3, 6, 11,
    4, 2, 4, 9,
    17, 16, 0,
  ];

  // map integers to strings (even or odd)
let newArray = myArray.map(num => (num % 2 == 0) ? "even" : "odd");
console.log(newArray);


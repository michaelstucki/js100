let myArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
  ];

  // log all even numbers (nested arrays)

  myArray.forEach(function (array) {
    array.forEach(function (num) {
        if (num % 2 == 0) {
            console.log(num);
        }
    });
  });

  
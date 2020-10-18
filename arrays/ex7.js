function sumOfSquares(numbers) {
    return numbers.reduce((accumulator, num) => accumulator + num * num, 0);
}

// If the initial value is omitted, the first array element is used as such but skipped in
// the accumulator; here 3 + 5*5 + 7*7 => 77

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83


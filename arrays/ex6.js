function oddLengths(arr) {
    return arr.map(a => a.length).filter(a => a % 2 != 0);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]


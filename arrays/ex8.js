function oddLengths(arr) {
    return arr.reduce((accum, str) => {
        if (str.length % 2 === 1) {
            accum.push(str.length);
        }
        return accum;
    }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log(oddLengths(arr)); // => [1, 5, 3]


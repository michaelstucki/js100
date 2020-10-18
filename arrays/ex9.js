function has3(numbers) {
    return numbers.reduce((accum, num) => {
        if (num === 3) {
            return true;
        }    
        return accum;
    }, false);
}


let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(has3(numbers1)); // => true
console.log(has3(numbers2)); // => false
console.log(has3(numbers3)); // => false


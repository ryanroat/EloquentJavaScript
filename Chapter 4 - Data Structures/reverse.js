/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
function reverseArray(array) {
    const newArray = [];

    for (const item of array) {
        newArray.unshift(item);
    }
    return newArray;
}

function reverseArrayInPlace(array) {}

console.log(`reverseArray(['A', 'B', 'C'])`);
console.log(reverseArray(['A', 'B', 'C']));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

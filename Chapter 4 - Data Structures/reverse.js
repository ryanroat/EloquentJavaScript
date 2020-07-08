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

function reverseArrayInPlace(array) {
    let len = array.length;
    let lastIndex = len - 1;
    for (i = 0; i < len / 2; i++) {
        const swapIndex = lastIndex - i;
        const swapVal = array[swapIndex];
        array[swapIndex] = array[i];
        array[i] = swapVal;
    }
}

console.log(`reverseArray(['A', 'B', 'C'])`);
console.log(reverseArray(['A', 'B', 'C']));

let arrayValue = [1, 2, 3, 4, 5];
console.log(`reverseArrayInPlace([${arrayValue}])`);
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

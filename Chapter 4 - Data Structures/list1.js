/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-else-return */

function arrayToList(array) {
    let list = null;
    for (i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

console.log(arrayToList([10, 20]));

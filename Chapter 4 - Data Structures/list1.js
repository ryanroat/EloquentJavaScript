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

function listToArray(list) {
    let array = [];
    let index = 0;
    console.log(list);

    function addLITA(list) {
        array[index] = list.value;
        index++;
        if (list.rest != null) {
            return addLITA(list.rest);
        } else return;
    }

    if (list.rest != null) {
        addLITA(list);
        // list = list.rest;
    }
    return array;
}

console.log(arrayToList([10, 20]));

console.log(listToArray(arrayToList([10, 20, 30])));

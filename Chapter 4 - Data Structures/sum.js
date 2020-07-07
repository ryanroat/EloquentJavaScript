function range(start, end) {
    const array = [];
    const size = end - start + 1;

    for (i = 0; i < size; i++) {
        array[i] = start + i;
    }

    return array;
}

function sum(numArr) {
    const l = numArr.length;
    let total = 0;
    for (i = 0; i < l; i++) {
        total += numArr[i];
    }
    return total;
}

console.log(range(5, 25));
console.log(sum(range(1, 10)));

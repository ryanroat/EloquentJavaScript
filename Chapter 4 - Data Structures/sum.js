// create numerical range array and sum all the values

function range(start, end, step) {
    const array = [];
    let size = 0;

    // check if passed a step value

    if (!step) {
        size = end - start + 1;
        for (let i = 0; i < size; i++) {
            array[i] = start + i;
        }
        return array;
    }

    /*  if given step param
        loop by step value
        either positve or negative */

    /* handle negative step first */

    if (step < 0) {
        size = (start - end + 1) / -step;
        for (let i = 0; i < size; i++) {
            array[i] = start + i * step;
        }
    } else {
        size = (end - start + 1) / step;
        for (let i = 0; i < size; i++) {
            array[i] = start + i * step;
        }
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

console.log('range(5, 25)');
console.log(range(5, 25));
console.log('sum(range(1, 10))');
console.log(sum(range(1, 10)));
console.log('range(1, 16, 5)');
console.log(range(1, 16, 5));
console.log('range(20, -10, -3)');
console.log(range(20, -10, -3));

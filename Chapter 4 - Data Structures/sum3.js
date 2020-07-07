/*  uses array methods (push) to build numerical range array and sum all values
    uses default parameter for step in case no step is passed in */

function range(start, end, step = 1) {
    const array = [];
    let size = 0;

    /* handle negative step value first */

    if (step < 0) {
        size = (start - end + 1) / -step;
    } else {
        size = (end - start + 1) / step;
    }
    for (let i = 0; i < size; i++) {
        array.push(start + i * step);
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
console.log('range(2, 16, 5)');
console.log(range(2, 16, 5));
console.log('range(20, -10, -3)');
console.log(range(20, -10, -3));

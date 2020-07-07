function range(start, end, step) {
    const array = [];
    let size = 0;
    if (!step) {
        size = end - start + 1;
        for (let i = 0; i < size; i++) {
            array[i] = start + i;
        }
        return array;
    }

    console.log(step);

    if (step < 0) {
        size = start - end + 1;
        for (let i = 0; i < size / step; i++) {
            array[i] = start - i * step;
        }
    } else {
        size = end - start + 1;
        for (let i = 0; i < size / step; i++) {
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

console.log(range(5, 25));
console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

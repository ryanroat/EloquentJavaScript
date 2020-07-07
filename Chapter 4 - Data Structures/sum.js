function range(start, end) {
    const array = [];
    const size = end - start + 1;

    for (i = 0; i < size; i++) {
        array[i] = start + i;
    }

    return array;
}

console.log(range(5, 25));

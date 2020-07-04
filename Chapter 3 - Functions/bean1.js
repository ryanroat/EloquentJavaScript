function countBs(str) {
    let letters = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            letters++;
        }
    }
    return letters;
}

console.log(countBs('Bumble Bee'));
console.log(countBs('Killer Bee'));
console.log(countBs('BBBB Bee'));
console.log(
    countBs('Buffalo buffalo buffalo buffalo buffalo buffalo buffalo.')
);

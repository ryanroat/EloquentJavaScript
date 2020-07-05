/* eslint-disable no-else-return */
function isEven(num) {
    /* if num is negative, mutiply by -1 to evaluate as positive number */
    if (num < 0) {
        num *= -1;
    }
    /* check if num is 0 therefore even or 1 therefore odd
    if neither, subtract 2 and call isEven with new value */
    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else return isEven(num - 2);
}

/* test values */

console.log(isEven(50));
console.log(isEven(75));

console.log(isEven(-1));
console.log(isEven(-4));

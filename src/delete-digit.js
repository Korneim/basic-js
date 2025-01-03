const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const num = [];
    const toStr = String(n);
    for (let i = 0; i < toStr.length; i++) {
        let result = String(n).split('')
        result.splice(i, 1)
        num.push(Number(result.join('')))
    }
    return (num.sort((a, b) => a - b).pop());
}

module.exports = {
    deleteDigit
};
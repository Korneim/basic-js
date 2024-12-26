const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
    let sorted = new Array(arr.length)
    let del= [];
    sorted.fill(0, 0, arr.length);

    arr.map ((elem, index) => {
        if (elem === -1) {
            sorted.splice(index, 1, elem);
        }
    });

    del = arr.filter ((elem) => elem > 0);
    del.fill(0,del.length,sorted.length-1).sort ((a, b) => b - a);

    for (let i = 0; i < sorted.length; i ++) {
        if (sorted[i] === 0) {
            sorted.splice(i, 1, del.pop());
        }
    }

    return sorted;
}

module.exports = {
  sortByHeight
};
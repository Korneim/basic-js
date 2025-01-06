const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let strRepeat = '';

    if (str instanceof Set) {
        strRepeat = str.toString();
    } else if (str instanceof Object) {
        strRepeat = 'STRING_OR_DEFAULT';
    } else strRepeat = str.toString();
    let final = '';

    if (options.addition) {
        let addition = '';
        const arr = new Array(options.additionRepeatTimes).fill(options.addition.toString());

        if (options.additionSeparator) {
            addition = arr.join(options.additionSeparator)
        } else addition = arr.join('|')
        strRepeat += addition;
    }

    const finalArr = new Array(options.repeatTimes).fill(strRepeat);
    if (options.separator) {
        final = finalArr.join(options.separator);
    } else final = finalArr.join('+');
    return final;
}

module.exports = {
    repeater
};
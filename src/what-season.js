const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    }
    if (!(date instanceof Date)) {
        throw Error('Invalid date!');
    }
    if (Object.getOwnPropertyNames(date).length > 0) {
        throw Error('Invalid date!');
    }

    const month = date.getMonth() + 1;
    if ([12, 1, 2].includes(month)) {
        return "winter";
    } else if ([3, 4, 5].includes(month)) {
        return "spring";
    } else if ([6, 7, 8].includes(month)) {
        return "summer";
    } else if ([9, 10, 11].includes(month)) {
        return "fall";
    } else {
        return "Invalid Date";
    }
}

module.exports = {
    getSeason
};
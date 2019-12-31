'use strict';

/**
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string}
 * Time Complexity - O(n) Linear
 */

function rgb(r, g, b) {
  const rgbArray = [r, g, b];
  return rgbArray
    .map(value =>
      parseInt(value, 10)
        .toString(16)
        .toUpperCase()
    )
    .map(value => {
      if (parseInt(value) < 0) {
        return '00';
      } else if (value.length > 2) {
        return 'FF';
      } else if (value.length == 1) {
        return '0' + value;
      } else {
        return value;
      }
    })
    .join('');
}

console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));

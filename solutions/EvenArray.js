'use strict';

/**
 * @param {number[]} array
 * @returns {number}
 * time complexity - O(n) Linear
 */

function evenArray(array) {
  if (array.length === 0) return -1;
  return array
    .map((_, ind, arr) => {
      let rightPortion = arr.slice(ind);
      let leftPortion = ind === 0 ? [0] : arr.slice(0, ind);
      return rightPortion.reduce((t, c) => (t += c), 0) ===
        leftPortion.reduce((t, c) => (t += c), 0)
        ? ind - 1
        : '';
    })
    .filter(v => v === '')[0];
}

// Test
console.log(evenArray([1, 2, 3, 4, 3, 2, 1]));

'use strict';

/**
 *
 * @param {number} num
 * @param {number} count
 * @return {Boolean}
 * Time Complexity - O(n) Linear
 */

function isHappy(num, count = 0) {
  if (isNaN(num) || !num) return;
  let numbers = num
    .toLocaleString('en-US', {
      useGrouping: false,
    })
    .split('')
    .map(n => n * n);
  let value = numbers.reduce((total, curr) => (total += curr), 0);
  return value === 1 ? true : count >= 10 ? false : isHappy(value, count + 1);
}

// Test

isHappy(7);

'use strict';

/**
 *
 * @param {number} n
 * @returns {number}
 * Recursive
 * I think it has a time complexity is O(2^n) - exponential
 */

/* I - Iterative
   R - Recursive */

function zerosR(n) {
  const value = 5;
  function trailingZeros(zeroCount = 0, inc = 1) {
    const exponent = n / Math.pow(value, inc);
    if (Math.floor(exponent) <= 0) return zeroCount;
    return trailingZeros((zeroCount += Math.floor(exponent)), inc + 1);
  }
  return trailingZeros();
}

/**
 *
 * @param {number} n
 * @returns {number}
 * Time complexity - O(n) - Linear
 */

function zerosI(n) {
  const value = 5;
  let zeroCount = 0;
  for (let i = 1; i < n; i++) {
    const exponent = n / Math.pow(value, i);
    if (Math.floor(exponent) <= 0) {
      return zeroCount;
    } else {
      zeroCount += Math.floor(exponent);
    }
  }
  return zeroCount;
}

// Tests

console.time('R');
console.log({ recursive: zerosR(20150100003470009880) });
console.timeEnd('R');

console.time('I');
console.log({ iterative: zerosI(20150100003470009880) });
console.timeEnd('I');

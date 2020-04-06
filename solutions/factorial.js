'use strict';

/* I - Iterative
  R - Recursive */

/**
 *
 * @param {number} num
 * @returns {number}
 * Time Complexity - O(2^n) Exponential
 */

function factorialR(num) {
  if (isNaN(num)) return;
  if (num === 0) return 1;
  return num * factorialR(num - 1);
}

/**
 *
 * @param {number} num
 * @returns {number}
 *  Time Complexity - O(n) Linear
 */

function factorialI(num) {
  if (num === 0) return 1;
  let result = num;
  for (let i = 1; i < num; i++) {
    result *= num - i;
  }
  return result;
}

//  Test

console.time('R');
console.log({ Recursive: factorialR(100) });
console.timeEnd('R');

console.time('I');
console.log({ Iterative: factorialI(100) });
console.timeEnd('I');

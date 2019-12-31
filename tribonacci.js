'use strict';

/**
 * @param {number[]} signature
 * @param {number} n
 * @returns {number[]}
 * Time Complexity - O(2^n) Exponential
 */

function tribonacci(signature, n) {
  if (n === 0) return [];
  if (signature.length > n) return signature.slice(-n);
  if (signature.length === n) return signature;
  let array = signature.reduce((total, _, __, arr) => {
    let value = arr.slice(-3).reduce((t, c) => (t += c));
    total = [...arr, value];
    return total;
  }, []);
  return tribonacci(array, n);
}

// Tests

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([3, 2, 1], 10));
console.log(tribonacci([0, 0, 1], 10));
console.log(tribonacci([1, 0, 0], 10));
console.log(tribonacci([1, 2, 3], 10));
console.log(tribonacci([0, 0, 0], 10));
console.log(tribonacci([300, 200, 100], 0));
console.log(tribonacci([1, 1, 1], 1));

'use strict';

/**
 *
 * @param {number[]} ints
 * @param {number} s
 * @returns {number[]}
 * Time Complexity - O(n) Linear
 */

function sum_pairs(ints, s) {
  if (ints.length < 2) return undefined;
  let intSet = new Set();
  intSet.add(ints[0]);
  for (let i = 1; i < ints.length; ++i) {
    let needed = s - ints[i];
    if (intSet.has(needed)) return [needed, ints[i]];
    intSet.add(ints[i]);
  }
  return;
}

// Tests

let l1 = [1, 4, 8, 7, 3, 15];
let l2 = [1, -2, 3, 0, -6, 1];
let l3 = [20, -13, 40];
let l4 = [1, 2, 3, 4, 1, 0];
let l5 = [10, 5, 2, 3, 7, 5];
let l6 = [4, -2, 3, 3, 4];
let l7 = [0, 2, 0];
let l8 = [5, 9, 13, -3];

console.log(sum_pairs(l1, 8));
console.log(sum_pairs(l2, -6));
console.log(sum_pairs(l3, -7));
console.log(sum_pairs(l4, 2));
console.log(sum_pairs(l5, 10));
console.log(sum_pairs(l8, 10));
console.log(sum_pairs(l5, 10));
console.log(sum_pairs(l6, 8));

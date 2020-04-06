'use strict';

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 *
 * Time Complexity - O(n*log2n) Log-Linear
 */

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const lastHalf = arr.splice(arr.length / 2);
  const firstHalf = arr;
  return mergeSort(sort(firstHalf), sort(lastHalf));
}

function sort(arr1, arr2) {
  const result = [];
  while (!(arr1.length === 0 && arr2.length === 0)) {
    let answer;
    if (arr1[0] < arr2[0] || arr2[0] === undefined) {
      answer = arr1.shift();
    } else {
      answer = arr2.shift();
    }
    result.push(answer);
  }
  return result;
}

// Test
const testArr = [
  3,
  3,
  5,
  78,
  345,
  453453,
  7876,
  4,
  323,
  7,
  7,
  78,
  434232,
  1,
  34,
  67,
  7998,
  43246,
  787,
  234,
  567,
  575,
  535,
  345,
  0.6,
  21,
  32,
  54,
  353,
];

console.log(mergeSort(testArr));

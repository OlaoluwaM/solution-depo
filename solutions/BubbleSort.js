'use strict';

/**
 *
 * @param {number[]} arr - array of integers
 * @returns {number[]} - sorted array of integers
 * Time Complexity - O(n^2) Quadratic
 */

function bubbleSort(arr) {
  let count = 0;
  while (count <= arr.length) {
    let swapCount = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      const currNum = arr[i];
      if (currNum > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapCount++;
      }
    }

    if (swapCount === 0) {
      break;
    }
    count++;
  }
  return arr;
}

function swap(arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
  return arr;
}

// Test

const smallArr = [1, 4, 7, 33, 25];
const bigArr = [
  700,
  300,
  5,
  8,
  1000,
  -1,
  3,
  0,
  33,
  1,
  3,
  3,
  4,
  55,
  3,
  4,
  2,
  4,
  54,
  56,
  5,
  43243,
  1,
  3123,
  312,
  342,
  54,
  5432,
  123,
  12312,
  31234,
  32423,
  321,
  31,
  313,
  4,
  3123,
  4,
  343,
  212,
  1234,
  34,
  123,
  44,
  355,
  4646,
  6423,
  43,
  42313,
  12,
  12,
  3343324,
  431,
  23312,
  3,
  1233,
  13,
  123123,
  43,
  341,
];

console.time('timer');
console.log(bubbleSort(bigArr));
console.timeEnd('timer');

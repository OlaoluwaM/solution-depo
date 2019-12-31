'use strict';

/**
 *
 * @param {number[]} list
 * @returns {string}
 * Time Complexity - O(n^2) Quadratic
 */

function solution(list) {
  const interval = {};
  let newSet;
  let key = 0;
  let iterationNum = 0;

  list.forEach((_, ind, arr) => {
    iterationNum += 0;
    while (arr[ind] - arr[ind + 1] === 1 || arr[ind] - arr[ind + 1] === -1) {
      if (iterationNum === 0) {
        key = ind;
        newSet = new Set();
      }

      newSet.add(arr[ind]);
      newSet.add(arr[ind + 1]);

      if (newSet.size > 2) {
        interval[key] = Array.from(newSet);
      }

      iterationNum++;
      return;
    }

    if (iterationNum > 0) {
      iterationNum = 0;
    }
  });

  let result = [...list];
  for (const key in interval) {
    if (interval.hasOwnProperty(key)) {
      const { length, 0: first, [length - 1]: last } = interval[key];
      result.splice(
        result.indexOf(first),
        interval[key].length,
        `${first}-${last}`
      );
    }
  }
  return result.join();
}

// Test

console.log(
  solution([
    -6,
    -3,
    -2,
    -1,
    0,
    1,
    3,
    4,
    5,
    7,
    8,
    9,
    10,
    11,
    14,
    15,
    17,
    18,
    19,
    20,
  ])
);

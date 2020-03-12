'use strict';

/**
 *
 * @param {[]} arr
 */

function findNumber(arr) {
  debugger;
  if (arr.length === 0) return 1;

  const newArr = arr.filter(v => v > 0);
  newArr.push(0);
  const sortedArr = [...new Set(newArr)].sort((a, b) => a - b);

  const value = sortedArr.find((_, i, arr) => arr[i + 1] - arr[i] > 1);

  return value === undefined ? sortedArr[sortedArr.length - 1] + 1 : value + 1;
}

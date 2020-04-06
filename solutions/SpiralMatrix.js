'use strict';

/**
 *
 * @param {[]} array
 * Time complexity: between O(n) (Linear) or O(n**2) (Quadratic)
 */

function spiralMatrix(array) {
  if (array.length === 1) return array[0];
  const last = array.length - 1;
  const output = [];

  let top = 0,
    left = 0,
    right = last,
    bottom = last,
    dir = 0;

  while (top <= bottom && left <= right) {
    if (dir === 0) {
      for (let i = left; i <= right; i++) {
        output.push(array[top][i]);
      }

      top++;
      dir++;
    } else if (dir === 1) {
      for (let i = top; i <= bottom; i++) {
        output.push(array[i][right]);
      }

      right--;
      dir++;
    } else if (dir === 2) {
      for (let i = right; i >= left; i--) {
        output.push(array[bottom][i]);
      }

      bottom--;
      dir++;
    } else {
      for (let i = bottom; i >= top; i--) {
        output.push(array[i][left]);
      }

      left++;
      dir = 0;
    }
  }

  return output;
}

// Tests

console.log(
  spiralMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  spiralMatrix([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ])
);

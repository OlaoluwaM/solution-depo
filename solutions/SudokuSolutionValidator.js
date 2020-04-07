'use strict';

function flatten(arr) {
  return arr
    .map(row => row.join(','))
    .join(',')
    .split(',');
}

/**
 * @param {[]} board
 * Time complexity: O(n**c) Polynomial
 *
 */

export default function validSolution(board) {
  const length = board.length;
  if (board.some(row => row.length !== length)) return false;

  const blockSize = Math.sqrt(length);
  const limit = (length * (length + 1)) / 2;
  const blockContainer = {};

  let terminated = false;
  let c = 0;

  for (let i = 0; i < length; i++) {
    if (terminated) break;
    blockContainer[`block-${i}`] = [];

    for (; c <= length; c++) {
      if (blockContainer[`block-${i}`].length === blockSize) {
        const row = flatten(blockContainer[`block-${i}`]);
        const total = row.reduce((acc, curr) => +acc + +curr, 0);
        const check = total === limit && new Set(row).size === row.length;

        if (!check) {
          terminated = true;
          break;
        }

        blockContainer[`block-${i}`] = check;

        c = c === length ? 0 : c;
        break;
      }

      const piece = board[c].splice(0, blockSize);

      blockContainer[`block-${i}`].push(piece);
    }
  }

  return !terminated;
}

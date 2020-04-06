'use strict';

// Note: this is only for 9X9 Sudoku boards

/**
 * @param {[]} board
 * Time complexity: O(n**2) Quadratic
 *
 */

export default function validSolution(board) {
  const regex = new RegExp(/[\s\d]{3}/, 'g');

  const length = board.length;
  const limit = (length * (length + 1)) / 2;

  const blockArray = board.map(row => row.join('').match(regex));
  const blockContainer = {};
  let terminated = false;
  let c = 0;

  for (let i = 0; i < length; i++) {
    blockContainer[`block-${i}`] = [];

    for (; c <= length; c++) {
      if (blockContainer[`block-${i}`].length === 3) {
        const row = blockContainer[`block-${i}`].join('').split('');
        const total = row.reduce((acc, curr) => +acc + +curr);
        const check = total === limit && new Set(row).size === row.length;

        if (!check) {
          terminated = true;
          break;
        }

        blockContainer[`block-${i}`] = check;

        c = c === length ? 0 : c;
        break;
      }
      if (terminated) break;

      blockContainer[`block-${i}`].push(blockArray[c].pop());
    }
  }

  return terminated ? false : true;
}

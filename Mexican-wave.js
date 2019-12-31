'use strict';

/**
 *
 * @param {string} word
 * @returns {string[]}
 * Time Complexity - O(n) Linear
 */

function wave(word) {
  if (word === '') return [];
  return [...word]
    .map(v => v.toUpperCase())
    .map((char, ind) => {
      const temp = [...word];
      return char === ' '
        ? 'skip'
        : temp.splice(ind, 1, char)
        ? temp.join('')
        : '';
    })
    .filter(v => v !== 'skip');
}

// Test

console.log(wave(' gap '));
console.log(wave('two words'));
console.log(wave('codewars'));

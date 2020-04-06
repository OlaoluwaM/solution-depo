'use strict';

/**
 *
 * @param {string} string
 * @returns {string[]}
 * Time Complexity - O(2^n) Exponential
 */

function permutations(string) {
  const array = [...string];
  const results = [string];
  function generate(length = array.length, arr = array) {
    if (length === 1) return;

    for (let counter = 0; counter < length; counter += 1) {
      generate(length - 1, arr);

      if (length % 2 === 0) {
        [arr[counter], arr[length - 1]] = [arr[length - 1], arr[counter]];
      } else {
        [arr[0], arr[length - 1]] = [arr[length - 1], arr[0]];
      }
      if (!results.includes(arr.join(''))) {
        let unique = [...arr];
        results.push(unique.join(''));
      }
    }
  }
  generate();
  return results;
}

// Test
console.log(permutations('aaaa'));
console.log(permutations('asahssdaa'));

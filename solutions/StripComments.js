'use strict';

/**
 *
 * @param {string} input
 * @param {string[]} marker
 * @returns {string}
 * Time Complexity - O(n) Linear
 */

function solution(input, marker) {
  const trimmedInput = input.trim();
  const indexOfFirstSpace = trimmedInput.match('\n').index;
  const cuttingIndex = marker.map(
    m => trimmedInput.match(new RegExp(`[${m}]`)).index - 1
  );
  cuttingIndex.push(indexOfFirstSpace);
  const indexArr = cuttingIndex.sort((a, b) => a - b);
  const iterationSet = new Set();
  const unwantedSubStrings = indexArr
    .map((itm, ind, arr) => {
      if (!iterationSet.has(ind)) {
        iterationSet.add(ind);
        iterationSet.add(ind + 1);
        let result = trimmedInput.slice(itm, arr[ind + 1]);
        return result.replace(result[0], ' \\');
      } else return 'none';
    })
    .filter(v => v !== 'none');
  const regex = new RegExp(unwantedSubStrings.join('|'), 'gi');
  return trimmedInput.replace(regex, '');
}

// Test

console.log(solution('a #b\nc\nd $e f g', ['#', '$']));
console.log(
  solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!'])
);

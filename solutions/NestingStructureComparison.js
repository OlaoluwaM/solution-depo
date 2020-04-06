'use strict';

// helpers
const containsNestedArr = arr =>
  arr.findIndex(elem => Array.isArray(elem)) > -1;

const formatArr = arr =>
  arr.map(e => (e === '[' || e === ']' ? 'brace' : 'elem'));

// Use JSON.stringify to get all brackets then check if the number of brackets are the same, afterward check if the number of non-bracket elements are the same. check the index of brackets and elements as well.

/**
 *
 * @param {[]} other
 * @returns Boolean
 * Time complexity: O(n**a), where a > 2, polynomial time complexity
 */

export function sameStructureAs(other) {
  if (this.length !== other.length || !Array.isArray(other)) return false;
  if (!(containsNestedArr(this) && containsNestedArr(this))) return true;

  let isSame = true;

  const array1 = formatArr(JSON.stringify(this).split(''));
  const array2 = formatArr(JSON.stringify(other).split(''));

  for (let i = 0; i < array1.length; i++) {
    if (!(array1[i] === array2[i])) {
      isSame = false;
      break;
    }
  }

  return isSame;
}

Array.prototype.sameStructureAs = sameStructureAs;

// Tests are done in __tests/NestedStructureComparison.test.js

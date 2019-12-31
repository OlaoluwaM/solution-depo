'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 * Time Complexity - O(n) Linear
 */

function twoSum(nums, target) {
  const ans = [];
  nums.map((num, _, arr) => {
    let sSum = nums.filter(v => num + v === target)[0];
    if (sSum + num === target || num + sSum === target) {
      if (arr.indexOf(num) !== arr.lastIndexOf(sSum)) {
        ans.push([nums.indexOf(num), nums.lastIndexOf(sSum)]);
      }
    }
  });
  return ans[0];
}

// Test
console.log(twoSum([3, 3], 6));

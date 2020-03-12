'use strict';

function josephus(items, k) {
  if (items.length === 0) return [];
  const ans = [];
  let indicator = 0;
  return items.map((elem, ind, arr) => {
    debugger;
    indicator += k - 1;
    const val = indicator > arr.length - k ? indicator - arr.length : indicator;
    return ans.push(arr.splice(val - arr.length, 1));
  });
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));

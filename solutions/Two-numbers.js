/**
 * @param {[]} l1
 * @param {[]} l2
 * @returns {[]}
 */

function addTwoNumbers(l1, l2) {
  let first = l1
    .map(String)
    .reverse()
    .join('');
  let second = l2
    .map(String)
    .reverse()
    .join('');
  return Number(first) + Number(second);
}

function deepIterator(obj) {
  let array = [];
  function iterate(object = obj) {
    if (object === null) return array;
    if (Object.keys(object).length === 0) return;
    Object.keys(object).forEach(key => {
      if (key === 'next') {
        iterate(object[key]);
      } else {
        array.push(object[key]);
      }
    });
    return array;
  }
  return iterate(obj);
}

// Test

const example = {
  val: 2,
  next: { val: 4, next: { val: 3, next: null } },
};
console.log(deepIterator(example));

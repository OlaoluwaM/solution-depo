'use strict';

function movingShift(s, shift) {
  if (s.length <= 1) return [s];
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';

  const constantLength = Math.ceil(s.length / 5);
  let step = 0;
  const container = [''];

  for (let i = 0; i < s.length; i++) {
    let output = '';

    const letter = s[i];
    const isUpperCase = letter.toUpperCase() === letter;
    const letterIndex = alphabets.indexOf(letter.toLowerCase());

    if (/[a-zA-Z]/.test(letter)) {
      const value = letterIndex + shift;
      const shiftedIndex =
        value > alphabets.length - 1 || value < 0
          ? value % alphabets.length
          : value;

      output = isUpperCase
        ? alphabets[shiftedIndex].toUpperCase()
        : alphabets[shiftedIndex];
    } else output = letter;

    container[step] += output;
    if (step < 4 && container[step].length === constantLength) {
      step++;
      container[step] = '';
    }
    shift++;
  }
  return container;
}

function demovingShift(arr, shift) {
  if (arr.length <= 1) return arr;
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';

  return arr
    .map(wordGroup => {
      let decryptedGroup = '';
      for (let i = 0; i < wordGroup.length; i++) {
        let output = '';

        const letter = wordGroup[i];
        const isUpperCase = letter.toUpperCase() === letter;
        const letterIndex = alphabets.indexOf(letter.toLowerCase());

        if (/[a-zA-Z]/.test(letter)) {
          const value = letterIndex - shift;
          const shiftedIndex =
            value > alphabets.length - 1 || value < 0
              ? value % alphabets.length
              : value;

          output = isUpperCase
            ? alphabets.substr(shiftedIndex, 1).toUpperCase()
            : alphabets.substr(shiftedIndex, 1);
        } else output = letter;

        decryptedGroup += output;
        shift++;
      }

      return decryptedGroup;
    })
    .join('');
}

const testString = ' uoxIirmoveNreefckgieaoiEcooqo';

const testString2 = 'I am a great dude';

const ansArray = [
  'J vltasl rlhr ',
  'zdfog odxr ypw',
  ' atasl rlhr p ',
  'gwkzzyq zntyhv',
  ' lvz wp!!!',
];

movingShift(testString, 2);

module.exports = { movingShift, demovingShift };

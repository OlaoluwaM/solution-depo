const { movingShift, demovingShift } = require('../movingShift');
const fc = require('fast-check');

// const testString =
//   'I should have known that you would have a perfect answer for me!!!';
// const testString2 = 'abcdefghjuty1234';
const testString = 'uoxIirmoveNreefckgieaoiEcooqo';
const testString2 = 'uaoQop jx eh osr okaKv vzagzwpxagokBKriipmc U';
const testString3 = 'kgpiqislyhvmffdzlyehjiIteAaaotcoapk bbMgaHlda';

const ansArray = [
  'J vltasl rlhr ',
  'zdfog odxr ypw',
  ' atasl rlhr p ',
  'gwkzzyq zntyhv',
  ' lvz wp!!!',
];

test('Property based test', () => {
  fc.assert(
    fc.property(fc.lorem(35, true), fc.integer(1, 10), (str, int) => {
      console.log({ str });
      const output = movingShift(str, int);
      expect(Array.isArray(output)).toBeTruthy();
      expect(output.length).toEqual(5);
    })
  );
});
Function.prototype.apply()
test.skip('should decrypt data', () => {
  const output = demovingShift(ansArray, 1);

  expect(typeof output === 'string').toBeTruthy();
  expect(output).toBe(testString);
});

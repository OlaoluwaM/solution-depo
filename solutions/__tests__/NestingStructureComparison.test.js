import { sameStructureAs } from '../NestingStructureComparison';

describe('tests', () => {
  test('Test 1', () => {
    expect([1, 1, 1].sameStructureAs([2, 2, 2])).toBeTruthy();
    expect([1, [1, 1]].sameStructureAs([2, [2, 2]])).toBeTruthy();
  });

  test('Test 2', () => {
    expect([1, 1].sameStructureAs([1, 1, 1])).toBeFalsy();
    expect([1, [1, 1]].sameStructureAs([[2, 2], 2])).toBeFalsy();
    expect([1, [1, 1]].sameStructureAs([[2], 2])).toBeFalsy();
  });

  test('Test 3', () => {
    expect([[[], []]].sameStructureAs([[[], []]])).toBeTruthy();
  });

  test('Test 4', () => {
    expect([[[], []]].sameStructureAs([[1, 1]])).toBeFalsy();
  });
});

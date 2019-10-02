'use-strict';

const insertionSort = require('../challenge-37-insertion-sort/challenge-37-insertion-sort');

describe('Testing insertionSort', () => {

  test('test insertion sort', () => {
    const testArr = [6,3,8,2,9];
    expect(insertionSort(testArr)).toEqual([2,3,6,8,9]);
  });

});




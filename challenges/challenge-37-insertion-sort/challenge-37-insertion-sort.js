'use strict';

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > element; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = element;
  }
  return arr;
};

module.exports = insertionSort;
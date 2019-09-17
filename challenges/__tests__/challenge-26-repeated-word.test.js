'use strict';
const repeatedWord = require('../challenge-26-repeated-word/challenge-26-repeated-word.js');


describe('Testing repeated word', () => {

  test('Return first repeated word', () => {
    let testLengthyStr = 'Once upon a time, there was a brave princess who';
    expect(repeatedWord(testLengthyStr)).toEqual('a');
  });

  test('Return first repeated word', () => {
    let testLengthyStr2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it';
    expect(repeatedWord(testLengthyStr2)).toEqual('it');
  });

});
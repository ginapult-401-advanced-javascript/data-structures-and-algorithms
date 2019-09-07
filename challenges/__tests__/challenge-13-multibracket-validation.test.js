'use strict';

const multiBracketValidation = require ('../challenge-13-multibracket-validation/challenge-13-multibracket-validation.js');

describe('Test multi-bracket validation', () => {

  class Stack {
    constructor() {
      this.top = null;
    }
  }

  test('a string with balanced brackets', () => {
    let testString = '[{()}]';
    expect(multiBracketValidation(testString)).toEqual(true);
  });


  test('a string with unbalanced brackets', () => {
    let testString2 = '{(]))abc]';
    expect(multiBracketValidation(testString2)).toEqual(false);
  });

});
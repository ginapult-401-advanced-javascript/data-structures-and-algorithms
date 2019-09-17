'use strict';

const Stack = require('../challenge-10-stacks-and-queues/challenge-10-stacks-and-queues').Stack;

const multiBracketValidation = (string) => {
  let bracketStack = new Stack();

  if(!string) {
    return;
  }

  for (let i = 0; i< string.length; i++) {
    let char = string[i];
    if (char === '(' || char === '{' || char === '[') {
      bracketStack.push(char);
    }
    if (char === ')' || char === '}' || char === ']') {
      let poppedChar;
      if(bracketStack.peekTop()) {
        poppedChar = bracketStack.pop();
      } else {
        return false;
    }
    if (poppedChar === '(' && char !== ')') {
      return false;
    }
    if (poppedChar == '{' && char !== '}') {
      return false;
    }
    if (poppedChar == '[' && char !== ']') {
      return false;
    }
  }
  if(!bracketStack.top) {
    return true;
  }
};

};

module.exports = multiBracketValidation;
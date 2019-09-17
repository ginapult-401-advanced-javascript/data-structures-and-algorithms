'use strict';

const repeatedWord = (lengthyString) => {
  let wordArray = lengthyString.toLowerCase().split(' ');
  let words = new Set();
  let count = 0;
  
  for (let i=0; i<wordArray.length; i++) {
    if(words.has(wordArray[i])) {
      return wordArray[i];
    } else {
      words.add(wordArray[i]);
    }
  }
};

module.exports = repeatedWord;
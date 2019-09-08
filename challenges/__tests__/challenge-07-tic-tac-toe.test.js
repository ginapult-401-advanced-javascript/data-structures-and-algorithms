'use strict';

const whoWins = require ('../challenge-07-tic-tac-toe/challenge-07-tic-tac-toe.js');

describe('Testing tic-tac-toe function whoWins', () => {

  test('x wins', () => {
    let testXwinsMatrix = [['x','x','x'],['o','o','x'],['o','x','o']];
    expect(whoWins(testXwinsMatrix)).toEqual('x');
  });

  test('o wins', () => {
    let testOwinsMatrix = [['o','x','o'],['o','o','x'],['o','x','o']];
    expect(whoWins(testOwinsMatrix)).toEqual('o');
  });

  test('tie', () => {
    let testTieMatrix = [['o','x','o'],['x','o','x'],['x','o','x']];
    expect(whoWins(testTieMatrix)).toEqual('tie');
  });

});
'use strict';

const whoWins = (matrix) => {

  // checking for wins across rows
  if (matrix[0][0] === 'o' && matrix[0][1] === 'o' && matrix[0][2] === 'o') {
    return 'o';
  }
  if (matrix[0][0] === 'x' && matrix[0][1] === 'x' && matrix[0][2] === 'x') {
    return 'x';
  }

  if (matrix[1][0] === 'o' && matrix[1][1] === 'o' && matrix[1][2] === 'o') {
    return 'o';
  }
  if (matrix[1][0] === 'x' && matrix[1][1] === 'x' && matrix[1][2] === 'x') {
    return 'x';
  }

  if (matrix[2][0] === 'o' && matrix[2][1] === 'o' && matrix[2][2] === 'o') {
    return 'o';
  }
  if (matrix[2][0] === 'x' && matrix[2][1] === 'x' && matrix[2][2] === 'x') {
    return 'x';
  }

  // checking for wins in columns
  if (matrix[0][0] === 'o' && matrix[1][0] === 'o' && matrix[2][0] === 'o') {
    return 'o';
  }
  if (matrix[0][0] === 'x' && matrix[1][0] === 'x' && matrix[1][0] === 'x') {
    return 'x';
  }

  if (matrix[0][1] === 'o' && matrix[1][1] === 'o' && matrix[2][1] === 'o') {
    return 'o';
  }
  if (matrix[0][1] === 'x' && matrix[1][1] === 'x' && matrix[2][1] === 'x') {
    return 'x';
  }

  if (matrix[0][2] === 'o' && matrix[1][2] === 'o' && matrix[2][2] === 'o') {
    return 'o';
  }
  if (matrix[0][2] === 'x' && matrix[1][2] === 'x' && matrix[2][2] === 'x') {
    return 'x';
  }

  // checking for diagonal wins

  if (matrix[0][0] === 'o' && matrix[1][1] === 'o' && matrix[2][2] === 'o') {
    return 'o';
  }
  if (matrix[0][0] === 'x' && matrix[1][1] === 'x' && matrix[2][2] === 'x') {
    return 'x';
  }

  if (matrix[0][2] === 'o' && matrix[1][1] === 'o' && matrix[2][0] === 'o') {
    return 'o';
  }
  if (matrix[0][2] === 'x' && matrix[1][1] === 'x' && matrix[2][0] === 'x') {
    return 'x';
  } else {
    return 'tie';
  }

};

module.exports = whoWins;
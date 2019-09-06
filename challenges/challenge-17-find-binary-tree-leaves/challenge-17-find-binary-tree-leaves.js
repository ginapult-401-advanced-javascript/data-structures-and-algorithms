'use strict';

function findLeavesRecursive(current) {
  let array = [];
  if(current === null) {
    return 'empty binary tree';
  }
  if(!current.left && !current.right) {
    array.push(current);
  }
  if(current.left) {
    findLeavesRecursive(current.left);
  }
  if(current.right) {
    findLeavesRecursive(current.right);
  }   return array;
}
module.exports = findLeavesRecursive;


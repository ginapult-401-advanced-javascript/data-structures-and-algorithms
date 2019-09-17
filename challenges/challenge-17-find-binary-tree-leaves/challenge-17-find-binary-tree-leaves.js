'use strict';

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

const findLeavesRecursive = (node, leafArray = []) => {
  if(node === null) {
    return;
  }
  if(!node.left && !node.right) {
    leafArray.push(node.value);
  }
  if(node.left) {
    findLeavesRecursive(node.left, leafArray);
  }
  if(node.right) {
    findLeavesRecursive(node.right, leafArray);
  }   
  return leafArray;
}
module.exports = findLeavesRecursive;
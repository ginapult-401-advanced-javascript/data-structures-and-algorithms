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


    const findMaxBtValue = (root) => {
    let maxValue = null;
    if(root === null) {
      return null;
    }
    if(root.value >= maxValue) {
      maxValue = root.value;
    }
    if(root.left) {
      findMaxBtValue(root.left);
    }
    if(root.right) {
      findMaxBtValue(root.right);
    }   
    return maxValue;
  };

module.exports = findMaxBtValue;
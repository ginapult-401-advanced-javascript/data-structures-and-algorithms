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


  const recursiveFindLength = (root, child, pathLength) => {
    if(root === null) {
        return null;
    }
    if(root.value === child) {
        return pathLength;
    } else {
        return recursiveFindLength(root.left, child, pathLength + 1) || recursiveFindLength(root.right, child, pathLength +1);
    }
  };

module.exports = recursiveFindLength;
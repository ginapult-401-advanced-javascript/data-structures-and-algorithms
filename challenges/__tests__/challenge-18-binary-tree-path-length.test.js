'use strict';

const recursiveFindLength = require('../challenge-18-binary-tree-path-length/challenge-18-binary-tree-path-length.js');

describe('Test finds path length in binary tree', () => {

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

  class Stack {
    constructor() {
      this.top = null;
    }
  }
  
  test('should find and return array with values of leaves of binary tree', () => {
    let testTree2 = new BinaryTree();
    const ten = new BinaryTreeNode(10);
    const seven = new BinaryTreeNode(7);
    const five = new BinaryTreeNode(5);
    const one = new BinaryTreeNode(1);
    const two = new BinaryTreeNode(2);
    const eleven = new BinaryTreeNode(11);
    const twelve = new BinaryTreeNode(12);
    const twenty = new BinaryTreeNode(20);
    
    testTree2.root = ten;

    five.left = one;
    five.right = two;

    ten.left = seven;
    ten.right = five;

    seven.left = eleven;
    seven.right = twelve;

    one.right = twenty;
    expect(recursiveFindLength(testTree2.root, 5, 0)).toEqual([11,12,20,2]);
  });

})

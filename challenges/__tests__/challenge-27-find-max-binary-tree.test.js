'use strict';

const findMaxBtValue = require('../challenge-27-find-max-binary-tree/challenge-27-find-max-binary-tree.js');

describe('Test finds maximum value in binary tree', () => {

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
  
  // test('should return null if binary tree is empty (no root)', () => {
  //   let testTree = new BinaryTree();
  //   testTree.root = new BinaryTreeNode(null);
  //   expect(findLeavesRecursive(testTree.root)).toEqual([null]);
  // });

  test('should find and return maximum value in a binary tree', () => {
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
    expect(findMaxBtValue(testTree2.root)).toEqual(20);
  });

});

'use strict';

const createUnionAndIntersection = require('../challenge-32-create-union-and-intersection/challenge-32-create-union-and-intersection');

describe('Test finds union and intersection of two binary trees', () => {

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

  test('should find and return maximum value in a binary tree', () => {
    let testTreeA = new BinaryTree();
    const tenA = new BinaryTreeNode(10);
    const seven = new BinaryTreeNode(7);
    const fiveA = new BinaryTreeNode(5);
    const one = new BinaryTreeNode(1);
    const twoA = new BinaryTreeNode(2);
    const elevenA = new BinaryTreeNode(11);
    const twelve = new BinaryTreeNode(12);
    const twentyA = new BinaryTreeNode(20);
    
    testTreeA.root = tenA;

    fiveA.left = one;
    fiveA.right = twoA;

    tenA.left = seven;
    tenA.right = fiveA;

    seven.left = elevenA;
    seven.right = twelve;

    one.right = twentyA;


    let testTreeB = new BinaryTree();
    
    const ten = new BinaryTreeNode(10);
    const eight = new BinaryTreeNode(8);
    const five = new BinaryTreeNode(5);
    const six = new BinaryTreeNode(6);
    const two = new BinaryTreeNode(2);
    const eleven = new BinaryTreeNode(11);
    const four = new BinaryTreeNode(4);
    const twenty = new BinaryTreeNode(20);
    
    testTreeB.root = ten;

    five.left = six;
    five.right = two;

    ten.left = eight;
    ten.right = five;

    eight.left = eleven;
    eight.right = four;

    six.right = twenty;
    expect(createUnionAndIntersection(testTreeA.root, testTreeB.root)).toEqual(20);
  });

});

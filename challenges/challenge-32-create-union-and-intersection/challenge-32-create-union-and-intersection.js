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

  const helperSet = new Set();


  const putTreeAinHelperSet = (rootA, helperSet, unionTracker=[]) => {
    if(rootA === null) {
      return null;
    }
    helperSet.add(rootA.value);
    unionTracker.push(rootA.value);

    putTreeAinHelperSet(rootA.left);
    putTreeAinHelperSet(rootA.right);

    return unionTracker;
  }

  const traverseTreeBAndCompare = (rootB, helperSet, unionTracker, intersectionTracker=[]) => {
    if(rootB === null) {
      return null;
    }
    if (helperSet.has(rootB.value)) {
      intersectionTracker.push(rootB.value);
    } else {
    unionTracker.push(rootB.value);
    }
    traverseTreeBAndCompare(root.left);
    traverseTreeBAndCompare(root.right);

    return intersectionTracker;
  }

  const createUnionAndIntersection = (rootA, rootB) => {
    const results = {};
    results.union = putTreeAinHelperSet(rootA, helperSet);
    results.intersection = traverseTreeBAndCompare(rootB, helperSet, results.union);
    return results;
  }

module.exports = createUnionAndIntersection;
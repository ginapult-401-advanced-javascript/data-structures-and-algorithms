'use strict';

const recursiveFindLength = (root, parent, child, edgeCount = 0) => {
    edgeCount++;
    let stack = new Stack();
    let root = current;
    if(current === parent) {
        stack.push(current);
    }
    if(current === child) {
        return edgeCount;
    }
    if(current.left) {
        recursiveFindLength(current.left);
    }
    if(current.right) {
        recursiveFindLength(current.right);
    }
    return edgeCount;
};
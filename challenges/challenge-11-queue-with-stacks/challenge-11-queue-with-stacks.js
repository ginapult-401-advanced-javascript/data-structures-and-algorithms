'use strict';

const Node = require('../challenge-10-stacks-and-queues/challenge-10-stacks-and-queues').Node;
const Stack = require('../challenge-10-stacks-and-queues/challenge-10-stacks-and-queues').Stack;

class PseudoQueue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(value) {
    if(value) {
      this.stackA.push(value);
      return this.stackA.top;
    } else {
      return null;
    }
  }

  dequeue() {

    while (this.stackA.top) {
      let popVal = this.stackA.pop();
      this.stackB.push(popVal);
      this.top = popVal;
    }
    return this.stackB;
  }
}

module.exports = { Node, Stack, PseudoQueue };
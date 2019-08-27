'use strict';

const Node = require('../challenge-10-stacks-and-queues/challenge-10-stacks-and-queues').Node;
const Stack = require('../challenge-10-stacks-and-queues/challenge-10-stacks-and-queues').Stack;
const Queue = require('../challenge-10-stacks-and-queues/challenge-10-stacks-and-queues').Queue;
const PseudoQueue = require('../challenge-11-queue-with-stacks/challenge-11-queue-with-stacks').PseudoQueue;

describe('Testing queue with stacks', () => {

  test('Queue behavior achieved through stacks', () => {
    let pseudoQueueList = new PseudoQueue();
    pseudoQueueList.enqueue(10);
    pseudoQueueList.enqueue(20);
    pseudoQueueList.enqueue(30);
    pseudoQueueList.enqueue(40);
    pseudoQueueList.enqueue(50);
    pseudoQueueList.dequeue();
    pseudoQueueList.dequeue();
    pseudoQueueList.dequeue();
    pseudoQueueList.dequeue();
    pseudoQueueList.dequeue();
    expect(pseudoQueueList.top.value).toEqual(10);
  });
});

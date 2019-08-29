'use strict';

const Node = require('../challenge-10-stacks-and-queues/challenge-10-stacks-and-queues').Node;
const Stack = require('../challenge-10-stacks-and-queues/challenge-10-stacks-and-queues').Stack;
const Queue = require('../challenge-10-stacks-and-queues/challenge-10-stacks-and-queues').Queue;

describe('Testing stacks and queues', () => {

  test('Can push onto a stack', () => {
    let pushOneList = new Stack();
    pushOneList.push(10);
    expect(pushOneList.top.value).toEqual(10);
  });

  test('Can push multiple values onto a stack', () => {
    let pushMultList = new Stack();
    pushMultList.push(20);
    pushMultList.push(30);
    pushMultList.push(40);
    expect(pushMultList.top.value).toEqual(40);
  });

  test('Can pop off the stack', () => {
    let popOffList = new Stack();
    popOffList.push(50);
    popOffList.push(60);
    popOffList.push(70);
    popOffList.pop();
    expect(popOffList.top.value).toEqual(60);
  });

  test('Can empty a stack after multiple pops', () => {
    let popEmptyStackList = new Stack();
    popEmptyStackList.push(80);
    popEmptyStackList.push(90);
    popEmptyStackList.push(100);
    popEmptyStackList.pop();
    popEmptyStackList.pop();
    popEmptyStackList.pop();
    expect(popEmptyStackList.top).toEqual(null);
  });

  test('Can peek next item on stack', () => {
    let peekItemList = new Stack();
    peekItemList.push(110);
    peekItemList.push(120);
    peekItemList.push(130);
    expect(peekItemList.peekTop()).toEqual(130);
  });

  test('Can instantiate empty stack', () => {
    let instEmptyStackList = new Stack();
    expect(instEmptyStackList.top).toEqual(null);
  });

  test('Can enqueue into the queue', () => {
    let canEnqueueList = new Queue();
    canEnqueueList.enqueue(140);
    expect(canEnqueueList.front.value).toEqual(140);
  });

  test('Can enqueue multiple values', () => {
    let enqueueMultList = new Queue();
    enqueueMultList.enqueue(150);
    enqueueMultList.enqueue(160);
    enqueueMultList.enqueue(170);
    expect(enqueueMultList.front.value).toEqual(150);
  });

  test('Can dequeue an expected value out of queue', () => {
    let dequeueValList = new Queue();
    dequeueValList.enqueue(180);
    dequeueValList.enqueue(190);
    dequeueValList.enqueue(200);
    dequeueValList.dequeue();
    expect(dequeueValList.front.value).toEqual(190);
  });

  test('Can peek into queue', () => {
    let peekInQueueList = new Queue();
    peekInQueueList.enqueue(210);
    peekInQueueList.enqueue(220);
    peekInQueueList.enqueue(230);
    expect(peekInQueueList.peekFront()).toEqual(210);
  });

  test('Can empty queue with dequeues', () => {
    let emptyQueueList = new Queue();
    emptyQueueList.enqueue(240);
    emptyQueueList.enqueue(250);
    emptyQueueList.enqueue(260);
    emptyQueueList.dequeue();
    emptyQueueList.dequeue();
    emptyQueueList.dequeue();
    expect(emptyQueueList.front).toEqual(null);
  });

  test('Can instantiate empty queue', () => {
    let instEmptyQueueList = new Queue();
    expect(instEmptyQueueList.front).toEqual(null);
  });

});
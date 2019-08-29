'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.top) {
      newNode.next = this.top;
      this.top = newNode;
    }
    else {
      this.top = newNode;
    }
    return newNode;
  }

  pop() {
    if (this.top) {
      let popVal = this.top.value;
      this.top = this.top.next;
      return popVal;
    }
    else {
      return 'no top value to return';
    }
  }

  peekTop() {
    if(this.top) {
      let topPeek = this.top.value;
      return topPeek;
    } else {
      return 'no top to peek at';
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  
  enqueue(value) {
    let newNode = new Node(value);
    if(this.back) {
      this.back.next = newNode;
      this.back = newNode;
    }
    else {
      this.back = newNode;
      this.front = newNode;
    }
  }
  
  dequeue() {
    let dequeuedVal = this.front.value;
    if(this.front) {
      this.front = this.front.next;
      return dequeuedVal;
    } else {
      return 'no front val to dequeue';
    }
  }
  
  peekFront() {
    if(this.front) {
      let frontPeek = this.front.value;
      return frontPeek;
    } else {
      return 'no front to peek at';
    }
  }
}

module.exports = { Node, Stack, Queue };
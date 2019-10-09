'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  llDeleteDupes(node) {
    const valSet = new Set();
    let current = this.head;
    while(current) {
      if(valSet.has(current.value)) {
        current.next = current.next.next;
      }
      if(!valSet.has(current.value)) {
        valSet.add(current.value);
      }
      current = current.next;
    }
  }
};

module.exports = llDeleteDupes;
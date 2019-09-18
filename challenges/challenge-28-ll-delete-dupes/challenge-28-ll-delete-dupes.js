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
    if (!valSet.has(this.head.value)) {
      this.previous.next = this.next;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    
    let previous = null;
    let current = this.head;

    while(current.value !== value) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }

  includes(value) {
    let current = this.head;
    while(current) {
      if(current.value === value) {
        return true;
      } 
      current = current.next;
    }
    return false;
  }
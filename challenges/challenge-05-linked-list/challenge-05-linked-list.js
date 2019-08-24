'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
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

  toString() {
    let current = this.head;
    let llString = '';
    while(current) {
      llString = llString + (current.value + ',');
      current  = current.next;
    }
    return llString;
  }
}

module.exports = LinkedList;
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
    let newNode = new Node(value);
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

  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    } else {
      let current = this.head;
      while(current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    return this.head;
  }

  insertBefore(value, newVal) {
    let newNode = new Node(newVal);
    let current = this.head;

    if(!current) {
      this.head = newNode;
      return this.head;
    } else {
      if(this.head.value === value) {
        newNode.next = this.head;
        this.head = newNode;
      }
      while(current) {
        if(!current.next) {
          return 'current.next is null';
        } else if(current.next.value === value) {
          newNode.next = current.next;
          current.next = newNode;
          return;
        }
        current = current.next;
      }
    }
  }
  
  insertAfter(value, newVal) {
    let newNode = new Node(newVal);
    let current = this.head;

    if(!current) {
      this.head = newNode;
      return this.head;
    }

    while(current) {
      if(current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }
}

module.exports = LinkedList;
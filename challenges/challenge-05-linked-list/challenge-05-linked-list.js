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

  remove(value) {
    if (!this.includes(value)) {
      return;
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

  toString() {
    let current = this.head;
    let llString = '';
    while(current) {
      llString = llString + (current.value + ',');
      current  = current.next;
    }
    return llString;
  }

  // code-challenge-06-ll-insertions

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

  // code-challenge-08-kth-value-from-end
  kthFromEnd(k) {
    let current = this.head;
    let reference = this.head;
    let count = 0;

    if (k < 0) {
      return 'k < 0';
    }

    if (current.next === null) {
      return 'This is a list of one.';
    }

    if (this.head !== null) {
      while (count < k) {
        if (reference === null) {
          return 'k > # nodes in list';
        }
        reference = reference.next;
        count ++;
      }
      
      while (reference !== null) {
        current = current.next;
        reference = reference.next;
      }
      return current.value;
      
    // if (k === count) {
    //     return 'k = length of list';
    //   }
    }
  }

}

module.exports = LinkedList;
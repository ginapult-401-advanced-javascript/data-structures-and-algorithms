'use strict';

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

  class AnimalShelter {
    constructor() {
      this.catQueue = new Queue();
      this.dogQueue = new Queue();
      this.id = 0;
    }

    enqueue(animal) {
      animal.id = this.id;
      this.id++;
    }

    dequeue(preference) {
      if(preference !== 'cat' && preference !== 'dog') {
        const nextDog = ;
        const nextCat = ;
        if(nextDog.id < nextCat.id) {
          return nextDog;
        }
        return nextCat;
      }
    }
  }
'use strict';

function mergeLinkedLists (listA, listB) {
  let currentA = listA.head;
  let currentB = listB.head;

  if(!currentA) {
    return listB;
  }
  
  if(!currentB) {
    return listA;
  }

  if(currentA.next === null) {
    currentA.next = currentB;
    currentA = listB.head
    return listB;
  }

  while(currentA) {
    let tempA = currentA.next;
    currentA.next = currentB;
    let tempB = currentB.next;
    currentB.next = tempA;
    currentB = tempB;
    currentA = currentA.next.next;
  }
  return listA;
}
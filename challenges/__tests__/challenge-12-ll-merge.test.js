'use strict';

const Node = require('../challenge-05-linked-list/challenge-05-linked-list').Node;
const LinkedList = require('../challenge-05-linked-list/challenge-05-linked-list').LinkedList;

describe('Testing linked lists merge', () => {

  test('Can merge two lists in place', () => {
    let listAtest = [1,2,3];
    let listBtest = ['a','b','c'];
    mergeLinkedLists(listAtest, listBtest);
    expect(listA).toEqual([1,'a',2,'b',3,'c']);
  });

});
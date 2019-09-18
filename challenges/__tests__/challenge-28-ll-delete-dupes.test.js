'use strict';
const LinkedList = require('../challenge-05-linked-list/challenge-05-linked-list');

describe('Testing linked list delete dupes', () => {

  test('deletes dupes from singly linked list', () => {
    let testLinkedList = new LinkedList();
    testLinkedList.insert(40);
    testLinkedList.insert(50);
    testLinkedList.insert(60);
    testLinkedList.insert(70);
    testLinkedList.insert(60);
    testLinkedList.insert(80);
    testLinkedList.insert(60);
    expect(testLinkedList.head.value).toEqual(60);
    expect(testLinkedList.head.next.value).toEqual(50);
    expect(testLinkedList.head.next.next.value).toEqual(40);
  });
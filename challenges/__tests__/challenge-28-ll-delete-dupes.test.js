'use strict';
const LinkedList = require('../challenge-05-linked-list/challenge-05-linked-list');
const llDeleteDupes = require('../challenge-28-ll-delete-dupes/challenge-28-ll-delete-dupes');

describe('Testing linked list delete dupes', () => {

  test('deletes dupes from singly linked list', () => {
    let testLinkedList = new LinkedList();
    testLinkedList.insert(40);
    testLinkedList.insert(50);
    testLinkedList.insert(50);
    testLinkedList.insert(60);
    testLinkedList.insert(70);
    11DeleteDupes(testLinkedList);
    expect(testLinkedList.head.next.next.value).toEqual(60);
  });
});
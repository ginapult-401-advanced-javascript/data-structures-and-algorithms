'use-strict';

const LinkedList = require('../challenge-05-linked-list/challenge-05-linked-list');

describe('Testing linked list', () => {

  test('Instantiate empty linked list', () => {
    let emptyList = new LinkedList();
    expect(emptyList.head).toEqual(null);
  });

  test('Testing proper insertion into linked list', () => {
    let insertOneList = new LinkedList();
    insertOneList.insert(10);
    expect(insertOneList.head).toBeTruthy();
  });

  test('Testing head property points to first node', () => {
    let headPropList = new LinkedList();
    headPropList.insert(20);
    expect(headPropList.head).toEqual({'next': null, 'value': 20});
  });

  test('Testing inserting multiple nodes', () => {
    let insertMultList = new LinkedList();
    insertMultList.insert(40);
    insertMultList.insert(50);
    insertMultList.insert(60);
    expect(insertMultList.head.value).toEqual(60);
    expect(insertMultList.head.next.value).toEqual(50);
    expect(insertMultList.head.next.next.value).toEqual(40);
  });

  test('Testing returns true when value exists and false when it does not', () => {
    let valueExistsList = new LinkedList();
    valueExistsList.insert(70);
    valueExistsList.insert(80);
    valueExistsList.insert(90);
    expect(valueExistsList.includes(80).toBeTruthy);
    expect(valueExistsList.includes(60).toBeFalsy);
  });

  test('Testing proper return collection of all values', () => {
    let returnValsList = new LinkedList();
    returnValsList.insert(100);
    returnValsList.insert(110);
    returnValsList.insert(120);
    expect(returnValsList.toString()).toEqual('120,110,100,');
  });
});

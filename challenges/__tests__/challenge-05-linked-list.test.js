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

  // code-challenge-06-ll-insertions testing

  test('Testing append', () => {
    let testAppendList = new LinkedList();
    testAppendList.insert(130);
    testAppendList.insert(140);
    testAppendList.append(150);
    expect(testAppendList.toString()).toEqual('140,130,150,');
  });

  test('Testing append multiple', () => {
    let testAppendMultList = new LinkedList();
    testAppendMultList.insert(160);
    testAppendMultList.insert(170);
    testAppendMultList.insert(180);
    testAppendMultList.append(190);
    testAppendMultList.append(200);
    expect(testAppendMultList.toString()).toEqual('180,170,160,190,200,');
  });

  test('Testing insert before middle', () => {
    let testInsertMidList = new LinkedList();
    testInsertMidList.insert(210);
    testInsertMidList.insert(220);
    testInsertMidList.insert(230);
    testInsertMidList.insertBefore(220, 240);
    expect(testInsertMidList.toString()).toEqual('230,240,220,210,');
  });

  // test('Testing insert before first node', () => {
  //   let testInsBeforeFirstList = new LinkedList();
  //   testInsBeforeFirstList.insert(250);
  //   testInsBeforeFirstList.insertBefore(260);
  //   expect(testInsBeforeFirstList.toString()).toEqual('260,250,');
  // });

  test('Testing insert after middle', () => {
    let testInsAftMidList = new LinkedList();
    testInsAftMidList.insert(270);
    testInsAftMidList.insert(280);
    testInsAftMidList.insert(290);
    testInsAftMidList.insertAfter(280, 300);
    expect(testInsAftMidList.toString()).toEqual('290,280,300,270,');
  });

  // test('Testing insert after last node', () => {
  //   let testInsAftLastList = new LinkedList();
  //   testInsAftLastList.insert(310);
  //   testInsAftLastList.insert(320);
  //   testInsAftLastList.insert(330);
  //   testInsAftLastList.insertBefore(310, 340);
  //   expect(testInsAftLastList.toString()).toEqual('330,320,310,340,');
  // });


  let testKthValueList = new LinkedList();
  testKthValueList.insert(350);
  testKthValueList.insert(360);
  testKthValueList.insert(370);
  testKthValueList.insert(380);
  testKthValueList.insert(390);
  testKthValueList.insert(400);
    
  test('Testing happy path k value from end', () => {
    expect(testKthValueList.kthFromEnd(3)).toEqual(370);
  });

  test('Testing kth value from end where k greater than length', () => {
    expect(testKthValueList.kthFromEnd(10)).toEqual('k > # nodes in list');
  });

  // test('Testing where k = length of list', () => {
  //   expect(testKthValueList.kthFromEnd(6)).toEqual('k = length of list');
  // });

  test('Testing where k is a neg number', () => {
    expect(testKthValueList.kthFromEnd(-4)).toEqual('k < 0');
  });

  test('Testing where list size is one', () => {
    let testKthValueOfOneList = new LinkedList();
    testKthValueOfOneList.insert(410);
    expect(testKthValueOfOneList.kthFromEnd(1)).toEqual('This is a list of one.');
  });

});

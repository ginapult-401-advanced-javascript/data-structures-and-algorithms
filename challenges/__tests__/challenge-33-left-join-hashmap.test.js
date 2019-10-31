'use strict';

const leftJoin = require('../challenge-33-left-join-hashmap/challenge-33-left-join-hashmap.js');

describe('left join of two hashmaps', () => {
  test('left joins two hashmaps', () => {
    
    let synMap = new Map();
    synMap.set('fond', 'enamored');
    synMap.set('outfit', 'garb');

    let antMap = new Map();
    antMap.set('fond', 'averse');
    antMap.set('flow', 'jam');

    leftJoin(synMap, antMap);
    expect (leftJoinMap[1][2]).toEqual('NULL');
  })
});
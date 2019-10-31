'use strict';

const leftJoin = (map1, map2) => {
  let leftJoinMap = [];

  synMap.forEach((value, key) => {
    const keyValPair = [];
    keyValPair[0] = key;
    keyValPair[1] = value;
    keyValPair[2] = antMap.get(key);
    if(!keyValPair[2]) {
      keyValPair[2] = 'NULL';
    }
    leftJoinMap.push(keyValPair);
  })
  return leftJoinMap;
}

module.exports = leftJoin;
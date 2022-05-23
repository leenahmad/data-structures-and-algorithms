'use strict';


const HashTable = require('../hashtable/hashtable');
const leftJoin = require('./hashmap-left-join');


describe('leftJoin ', () => {

  let hashTable1;
  let hashTable2;
  beforeEach(() => {
    hashTable1 = new HashTable(1024);
    hashTable2 = new HashTable(1024);

    hashTable1.set('fond', 'enamored');
    hashTable1.set('wrath', 'anger');
    hashTable1.set('diligent', 'employed');
    hashTable1.set('outfit', 'garb');
    hashTable1.set('guide', 'usher');

    hashTable2.set('fond', 'averse');
    hashTable2.set('wrath', 'delight');
    hashTable2.set('diligent', 'idle');
    hashTable2.set('guide', 'follow');
    hashTable2.set('flow', 'jam');
  });

  test(' successful  ', () => {
    const result = leftJoin(hashTable1, hashTable2);
    expect(result.length).toBe(5);

  });

  test('Does not add non-corresponding key from second table', () => {
    let result = leftJoin(hashTable1, hashTable2);
    expect(result.flow).toBeFalsy();
  });



});

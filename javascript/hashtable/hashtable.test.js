// '

'use strict';

const Hashtable = require('./hashtable');
describe('test Hashtable', () => {

  let Hashtable1;
  beforeAll(() => {
    Hashtable1 = new Hashtable(1);
    Hashtable1.set('name', 'status');
  });

  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {

    let hashTable = new Hashtable(3);
    hashTable.set('leen', 'single');
    hashTable.set('work', 'developer');

    const hash1 = hashTable.hash('leen');
    const hach2 = hashTable.hash('work');

    expect(hashTable.table[hash1].head.value).toEqual({leen:'single'});
    expect(hashTable.table[hach2].head.value).toEqual({work:'developer'});
  });

  it('Retrieving based on a key returns the value stored', () => {

    let hashTable = new Hashtable(3);
    hashTable.set('leen', 'single');
    hashTable.set('work', 'developer');


    expect(hashTable.get('leen')).toEqual('single');
    expect(hashTable.get('work')).toEqual('developer');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {

    let hashTable = new Hashtable(3);

    expect(hashTable.get('leen')).toBeNull();
    expect(hashTable.get('work')).toBeNull();
  });

  it('Successfully handle a collision within the hashtable', () => {
    Hashtable1.set('leen', 'single');
    const hach1 = Hashtable1.hash('leen');
    expect(Hashtable1.table[hach1].head.value).toEqual({name:'status'});
    expect(Hashtable1.table[hach1].head.next.value).toEqual({leen:'single'});
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    Hashtable1.set('leen', 'name');

    expect(Hashtable1.get('name')).toEqual('status');
    expect(Hashtable1.get('leen')).toEqual('single');
  });

  it('Successfully hash a key to an in-range value', () => {

    const hashtable = Hashtable1.hash('leen');
    expect(hashtable).toBeLessThan(Hashtable1.table.length);
    expect(hashtable).toBeLessThan(3);
  });

  it('indicating if the key exists in the table.', () => {

    let hashTable = new Hashtable(3);
    hashTable.set('leen', 'single');



    expect(hashTable.contain(`leen`)).toBeTruthy();
    expect(hashTable.contain(`taken`)).toBeFalsy();

  });

});

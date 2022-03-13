'use strict';


const { describe, it } = require('eslint/lib/rule-tester/rule-tester');


const LinkedLilst = require('../index');

// const linkedListZip = require('../index');


describe('test Linked List', () => {

  it('works', () => {

    expect(true).toBeTruthy();

  });



  it('an empty linked list',() => {

    const ll = new LinkedLilst();

    expect(ll).toBeDefined();

    expect(ll.head).toBeNull();

  });

});


describe('first node in the linked list', () => {

  it('insert in linked list', () => {

    const ll = new LinkedLilst();

    ll.insert(1);

    expect(ll.head.value).toEqual(1);

    expect(ll.head.next).toBeNull();

  });


  it('insert in linked list', () => {

    const ll = new LinkedLilst();

    ll.insert(1);

    ll.insert(2);

    expect(ll.head.value).toEqual(2);

    expect(ll.head.next.value).toBe(1);

  });
});


describe('return true or false', () => {

  it('return true if value within the linked list that exists',() => {

    let ll = new LinkedLilst();

    ll.insert(1);

    ll.insert(2);

    ll.insert(3);

    ll.insert(4);

    expect(ll.includes(4)).toBe(true);

  });


  it('return false if linked list  does not exist',() => {

    let ll = new LinkedLilst();

    ll.insert(1);

    ll.insert(2);

    ll.insert(3);

    ll.insert(4);

    expect(ll.includes(5)).toBe(false);
  });

  it('return a all values in the linked list',() => {
    let ll = new LinkedLilst();

    ll.insert('1');

    ll.insert('2');

    ll.insert('3');

    expect(ll.toString()).toBe('{ 3 }->{ 2 }->{ 1 }->NULL');
  });

});

describe('insertions', () => {
  it('add a node to the end of the linked list', () => {
    const ll = new LinkedLilst();
    ll.append(1);
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next).toBeNull();
  });

  it('add multiple nodes to the end of a linked list', () => {

    const ll = new LinkedLilst();
    ll.append(1);
    ll.append(2);
    ll.append(3);

    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next.value).toEqual(3);
    expect(ll.head.next.next.next).toBeNull();
  });

  it('insert a node before a node located i the middle of a linked list', () => {
    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);


    ll.insertbefore(3,10);
    let newValue = ll.toString();

    expect(newValue).toEqual('{ 10 }->{ 3 }->{ 2 }->{ 1 }->NULL');
  });

  it('insert a node before the first node of a linked list', () => {

    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insert(4);

    ll.insertbefore(4,10);
    let newValue = ll.toString();
    expect(newValue).toEqual('{ 10 }->{ 4 }->{ 3 }->{ 2 }->{ 1 }->NULL');
  });

  it('insert after a node in the middle of the linked list', () => {
    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insertafter(2,10);
    let newValue = ll.toString();
    expect(newValue).toEqual('{ 3 }->{ 2 }->{ 10 }->{ 1 }->NULL');
  });

  it('insert a node after the last node of the linked list',() => {
    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insertafter(1,10);
    let newValue = ll.toString();
    expect(newValue).toEqual('{ 3 }->{ 2 }->{ 1 }->{ 10 }->NULL');
  });

});

describe('k' , () => {
  it('Where k is greater than the length of the linked list', () => {
    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);

    let value = ll.kth(1);
    expect(value).toEqual(1);
  });

  it('Where k and the length of the list are the same', () => {
    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);

    let value = ll.kth(3);
    expect(value).toEqual(3);
  });

  it('Where k is not a positive integer', () => {
    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);

    let value = ll.kth(-1);
    expect(value).toEqual('change number because can\'t be less than 0 or 0');
  });

  it('Where the linked list is of a size 1', () => {
    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);

    let value = ll.kth(4);
    expect(value).toEqual('change number because can\'t be higher than length of list');
  });

  it('Happy Path', () => {
    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insert(4);
    ll.insert(5);

    let value = ll.kth(2);

    expect(value).toEqual(2);
  });

});

describe('linked-list-zip' , () => {
  it('should return a merged list', () => {
    let list1 = new LinkedLilst();
    list1.insert(1);
    list1.insert(2);
    list1.insert(3);

    let list2 = new LinkedLilst();
    list2.insert('A');
    list2.insert('B');
    list2.insert('C');

    let list3 = new LinkedLilst();

    expect(list3.linkedListZip(list1,list2)).toEqual('{ 3 }->{ C }->{ 2 }->{ B }->{ 1 }->{ A }->NULL');
  });
});

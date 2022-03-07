'use strict';


const { describe, it } = require('eslint/lib/rule-tester/rule-tester');


const LinkedLilst = require('../index');

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

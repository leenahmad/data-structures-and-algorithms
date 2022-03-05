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

    ll.insert('a');

    ll.insert('b');

    ll.insert('c');

    expect(ll.toString()).toBe('{ c }->{ b }->{ a }->NULL');
  });

});

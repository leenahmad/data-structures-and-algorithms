'use strict';

// const Node = require('../Node.js');
const Stack = require('../stack.js');


describe('test for stack' , () => {

  it('pust into a stack' , () => {
    let newstack = new Stack();
    newstack.push(2);
    expect(newstack.peek()).toBe(2);
  });

  it('push multiple values into a stack' , () => {
    let newstack = new Stack();
    newstack.push(2);
    expect(newstack.peek()).toBe(2);
    newstack.push(3);
    expect(newstack.peek()).toBe(3);
  });

  it('pop off the stack' , () => {
    let newstack = new Stack();
    newstack.push(2);
    newstack.push(3);
    expect(newstack.pop()).toBe(3);
  });

  it('empty a stack after multiple pops' , () => {
    let newstack = new Stack();
    newstack.push(1);
    newstack.push(2);
    newstack.push(3);
    newstack.push(4);

    expect(newstack.pop()).toBe(4);
    expect(newstack.pop()).toBe(3);
    expect(newstack.pop()).toBe(2);
    expect(newstack.pop()).toBe(1);
    expect(newstack.pop()).toBe('stack iss empty');
  });

  it('peek the next item on the stack' , () => {
    let newstack = new Stack();
    newstack.push(1);
    newstack.push(2);
    newstack.push(3);

    expect(newstack.peek()).toBe(3);
  });

  it('instantiate an empty stack' , () => {
    let newstack = new Stack();
    expect(newstack).toBeInstanceOf(Stack);
  });

  it('pop or peek on empty stack raises exception' , () => {
    let newstack = new Stack();
    expect(newstack.pop()).toBe('stack iss empty');
    expect(newstack.peek()).toBe('stack iss empty');
  });

});

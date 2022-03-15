'use strict';

const { describe, it } = require('eslint/lib/rule-tester/rule-tester');
const Queue = require('../queue.js');

describe('test for queue' , () => {
  it('enqueue into a queue' , () => {
    let newqueue = new Queue();
    newqueue.enqueue(1);
    expect(newqueue.peek()).toBe(1);
  });

  it('enqueue multiple values into a queue' , () => {
    let newqueue = new Queue();
    newqueue.enqueue(1);
    expect(newqueue.peek()).toBe(1);
    newqueue.enqueue(2);
    expect(newqueue.peek()).toBe(1);
  });

  it('dequeue out of a queue the expected value' , () => {
    let newqueue = new Queue();
    newqueue.enqueue(1);
    newqueue.enqueue(2);
    expect(newqueue.dequeue()).toBe(1);
    expect(newqueue.dequeue()).toBe(2);

  });

  it('peek into a queue, seeing the expected value' , () => {
    let newqueue = new Queue();
    newqueue.enqueue(1);
    newqueue.enqueue(2);
    expect(newqueue.peek()).toBe(1);
    expect(newqueue.peek()).toBe(1);
  });

  it('empty a queue after multiple dequeues' , () => {
    let newqueue = new Queue();
    newqueue.enqueue(1);
    newqueue.enqueue(2);
    expect(newqueue.dequeue()).toBe(1);
    expect(newqueue.dequeue()).toBe(2);
    expect(newqueue.dequeue()).toBe('queue iss empty');

  });

  it('instantiate an empty queue' , () => {
    let newqueue =  new Queue();
    expect(newqueue).toBeInstanceOf(Queue);
  });

  it('dequeue or peek on empty queue raises exception' , () => {
    let newqueue = new Queue();

    expect(newqueue.dequeue()).toBe('queue iss empty');
    expect(newqueue.peek()).toBe('queue iss empty');
  });
});

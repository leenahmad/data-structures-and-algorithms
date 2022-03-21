'use strict';



const { it } = require('eslint/lib/rule-tester/rule-tester');
const QueueP = require('../stack-queue-pseudo');

describe('test for stack-queue-pseudo' , () => {

  it('enqueue into a queueP' , () => {
    let Queue = new QueueP();
    Queue.enqueue(1);
    expect(Queue.stack1.peek()).toBe(1);
  });

  it('enqueue multiple values into a queueP' , () => {
    let Queue = new QueueP();
    Queue.enqueue(1);
    expect(Queue.stack1.peek()).toBe(1);
    Queue.enqueue(2);
    expect(Queue.stack1.peek()).toBe(2);
  });

  it('expected value in dequeue out of queue' , () => {
    let Queue = new QueueP();

    Queue.enqueue(1);
    Queue.enqueue(2);

    expect(Queue.dequeue()).toBe(1);
    expect(Queue.dequeue()).toBe(2);


  });

  it('instantiate an empty queue' , () => {
    let Queue =  new QueueP();
    expect(Queue).toBeInstanceOf(QueueP);
  });

  it('dequeue or peek on empty queue raises exception' , () => {
    let Queue = new QueueP();

    expect(Queue.dequeue()).toBe('stack iss empty');
    expect(Queue.stack1.peek()).toBe('stack iss empty');
  });

  it('empty queue after multiple dequeues' , () => {
    let Queue =  new QueueP();

    Queue.enqueue(1);
    Queue.enqueue(2);
    Queue.enqueue(3);

    expect(Queue.dequeue()).toBe(1);
    expect(Queue.dequeue()).toBe(2);
    expect(Queue.dequeue()).toBe(3);
    expect(Queue.dequeue()).toBe('stack iss empty');

  });

});

'use strict';

const Stack = require('../stack');

class QueueP {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  //enqueue
  //Arguments: value
  //Inserts value into the PseudoQueue, using a first-in, first-out approach.

  enqueue(value){
    this.stack1.push(value);
    return this.stack1.top;

  }
  //dequeue
  //Arguments: none
  //Extracts a value from the PseudoQueue, using a first-in, first-out approach.h

  dequeue(){
    while(this.stack1.top){
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }


}

module.exports = QueueP;

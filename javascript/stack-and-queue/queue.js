const Node = require('./Node.js');

class Queue {

  constructor(){
    this.front = null;
  }

  // queue enqueue method
  enqueue(value){
    let node = new Node(value);
    if(!this.front){
      this.front = node;
    }else{
      let back = this.front;
      while(back.next){
        back = back.next;
      }
      back.next = node;
    }
  }

  // queue dequeue method
  dequeue() {
    if(!this.front){
      return 'queue iss empty';
    }else{
      let value = this.front;
      this.front = this.front.next;
      return value.value;
    }
  }

  // queue peek method
  peek(){
    if(!this.front){
      return 'queue iss empty';
    }
    return this.front.value;
  }

  //queue isEmpty method
  isEmpty(){
    if(!this.front){
      return true;
    }else {
      return false;
    }
  }

}
module.exports = Queue;

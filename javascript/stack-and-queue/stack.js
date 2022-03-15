const Node = require('./Node');

class Stack {
  constructor(){
    this.top = null;
  }

  // stack push method
  push(value){

    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  // stack pop method
  pop(){
    if(!this.top){
      return 'stack iss empty';
    }

    let val = this.top;
    this.top = val.next;
    return val.value;
  }

  // stack peek method
  peek(){
    if(!this.top){
      return 'stack iss empty';
    }
    return this.top.value;
  }

  //stack isEmpty method
  isEmpty(){
    if(!this.top){
      return true;
    }else {
      return false;
    }
  }



}

module.exports = Stack;

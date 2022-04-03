'use strict';

const Queue = require('../../stack-and-queue/queue');

function breadthFirst(tree){

  if(!tree.root){
    return 'tree is empty';
  }

  let arr = [];
  let queue = new Queue();

  queue.enqueue(tree.root);

  while(!queue.isEmpty()){
    const node = queue.dequeue();

    arr.push(node.value);

    if(node.left){
      queue.enqueue(node.left);
    }
    if(node.right){
      queue.enqueue(node.right);
    }

  }
  return arr;

}
module.exports=breadthFirst;

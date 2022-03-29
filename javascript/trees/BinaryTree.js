'use strict';

class binary{
  constructor(root){
    this.root = root;
  }

  //root - left - right
  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }


  // left - root - right
  inOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }


  // left  - right - root
  postOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  maximumTree(){
    if(!this.root){
      return 'empty';
    }
    let maxValue = this.root.value;
    let recursive = (node) => {
      if(node.left){
        recursive(node.left);
      }
      if(node.right){
        recursive(node.right);
      }
      if(node.value > maxValue){
        maxValue = node.value;
      }
    };

    recursive(this.root);
    return maxValue;

  }
}

module.exports=binary;

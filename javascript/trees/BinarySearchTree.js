'use strict';

const binary = require('./BinaryTree');

const Node = require('./Node');

class BinarySearch extends binary{
  constructor(root){
    super(root);
  }

  add(value){

    let newNode = new Node(value);

    if(!this.root){
      this.root = newNode;
    } else {
      let node = this.root;

      let recursive = (value) => {
        let newNode = new Node(value);
        if(newNode.value < node.value){
          if(!node.left){
            node.left = newNode;
          }
          else{
            node = node.left;
            recursive(newNode);
          }
        } else {
          if(!node.right){
            node.right = newNode;
          }
          else{
            node = node.right;
            recursive(newNode);
          }
        }
      };
      recursive(value);
    }
  }

  contain(value){
    let boolean = false;

    let recursive = (node) =>{
      if(node.value === value){
        boolean = true;
      }
      if(node.left){
        recursive(node.left);
      }
      if(node.right){
        recursive(node.right);
      }
    };
    recursive(this.root, value);
    return boolean;
  }


}

module.exports=BinarySearch;

'use strict';

function fizzBuzzTree(tree){

  if(tree.root === null){
    return 'tree is empty';
  }

  let recursive = (node) => {

    if(node.value % 3 === 0 && node.value % 5 ===0){
      node.value = 'fizz buzz';
    }else if (node.value % 3 === 0){
      node.value = 'fizz';
    }else if (node.value % 5 === 0){
      node.value = 'buzz';
    }else {
      node.value = node.value.toString();
    }
    for(let i = 0; i < node.children.length; i++){
      recursive(node.children[i]);
    }
  };
  recursive(tree.root);
  return tree;


}

module.exports = fizzBuzzTree;

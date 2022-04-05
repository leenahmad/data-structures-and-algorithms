'use strict';

const Node = require('./Node');

class k_tree{

  constructor(value){
    let node = new Node(value);
    this.root = node;
  }
}

module.exports = k_tree;

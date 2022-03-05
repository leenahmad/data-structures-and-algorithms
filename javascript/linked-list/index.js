'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;

  }
  //insert
  insert(value) {

    const node = new Node(value);

    if (!this.head) {

      this.head = node;
    }

    else {

      node.next = this.head;

      this.head = node;
    }
  }

  //includes
  includes(value) {

    const node = this.head;

    while (node !== null) {

      if (node.value === value) {

        return true;
      }

      else if (node.value !== value) {

        return false;
      }

    }

  }

  //toString
  toString() {

    let string = '';

    while (this.head !== null) {

      string = string + `{ ${this.head.value} }->`;

      this.head = this.head.next;

    }

    string = string + 'NULL';

    return string;
  }

}



module.exports = LinkedList;

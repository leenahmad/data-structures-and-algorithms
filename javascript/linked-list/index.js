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

  //append
  append(value) {
    const node = new Node(value);
    if(!this.head) { //means LL is empty
      this.head = node;
    } else { //means LL is not empty
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  //insertbefore
  insertbefore(value, newValue){

    if(this.head.value === value){
      this.insert(newValue);
    }
    else{
      let tail = this.head;

      while(this.head !== null){
        if(this.head.value === value){
          let newNode = new Node(newValue);
          newNode.next = this.head;
          tail.next = newNode;
          break;
        }
        tail = this.head;
        this.head = this.head.next;
      }
    }
  }

  //insertafter
  insertafter(value, newValue) {
    let node = new Node(newValue);
    if (this.head) {
      if (this.head.value === value) {
        this.head.next = node;
        this.head = node;
        return;
      }
      let newNode = this.head;
      while (newNode) {
        if (newNode.value === value) {
          let temp = newNode.next;
          newNode.next = node;
          node.next = temp;
          return;
        }
        newNode = newNode.next;
      }
    }

  }

  //kth
  kth(num) {
    if (num <= 0) {
      return 'change number because can\'t be less than 0 or 0';
    }
    let value = this.head;
    let count = 1;
    while (value.next) {
      value = value.next;
      count++;
    }
    value = this.head;
    let finalCount = count - num;
    if (finalCount <= -1) {
      return 'change number because can\'t be higher than length of list';
    }
    for (let i = 0; i < finalCount; i++) {
      value = value.next;
    }
    return value.value;
  }
}



module.exports = LinkedList;

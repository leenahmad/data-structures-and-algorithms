'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  //append
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      //means LL is empty
      this.head = node;
    } else {
      //means LL is not empty
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }
}

class hashTable {
  constructor(length) {
    this.table = new Array(length);
    this.keys = length;
  }

  set(key, value) {
    let hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    let data = { [key]: value };
    this.table[hash].append(data);
  }

  get(key) {
    const hash = this.hash(key);

    if (this.table[hash]) {
      let current = this.table[hash].head;

      while (current) {
        if (current.value[key]) {
          return current.value[key];
        }
        current = current.next;
      }
    } else {
      return null;
    }
  }

  contain(key) {
    const hash = this.hash(key);
    if (this.table[hash]) {
      let current = this.table[hash].head;
      while (current) {
        if (current.value[key]) {
          current = current.next;
          return true;
        } else {
          return false;
        }
      }
    }
  }

  hash(key) {
    return key.split('').reduce((acc , char) => {
      return acc + char.charCodeAt();
    },0) * 599 % this.keys;
  }

  keys() {
    return Object.keys(this.table);
  }
}

module.exports = hashTable;

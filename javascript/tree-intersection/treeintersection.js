'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}
class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  set(key, value) {

    let hash;
    if (typeof key === 'number') {
      hash = key;
    } else {
      hash = this.hash(key);
    }
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }



    let bucket = { [key]: value };
    this.map[hash].add(bucket);
  }

  get(key) {

    let hash = this.hash(key);

    if (this.map[hash]) {
      let pointer = this.map[hash].head;


      while (pointer) {

        if (pointer.value[key]) {
          return pointer.value[key];
        }
        pointer = pointer.next;
      }
    } else {
      return 'empty';
    }
  }

  contains(key) {

    let hash = this.hash(key);

    if (this.map[hash]) {
      let pointer = this.map[hash].head;


      while (pointer) {
        if (pointer.value[key]) {
          return true;
        }
        pointer = pointer.next;
      }
    } else {
      return false;
    }
  }

  hash(key) {
    let hash = (key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0) *
        599) %
      this.size;

    return hash;
  }

  treeIntersection(treeOne, treeTow) {
    let key;
    let hash;

    let output = [];
    let a = 0;

    let recursive = (node) => {
      key = node.value;
      this.set(key, ' ');
      if (a > 0) {
        if (typeof key === 'number') {
          hash = key;
        } else {
          this.hash(key);
        }

        if (this.map[hash].head.next) {
          output.push(hash);
        }
      }
      if (node.left) {
        recursive(node.left);
      }
      if (node.right) {
        recursive(node.right);
      }
    };
    recursive(treeOne.root);
    a++;
    recursive(treeTow.root);
    return output;
  }
}

module.exports = HashTable;

'use strict';

const KaryTree =  require('../k-arytree.js');

const Node = require('../Node.js');

const fizzBuzzTree =  require('../tree-fizz-buzz.js');

describe('fizz buzz tree test' , () => {

  beforeAll(()=> {

    let one = new Node(2);
    let two = new Node(5);
    let three = new Node(7);
    let four = new Node(15);
    let five = new Node(20);
    let six = new Node(23);
    let seven = new Node(25);
    let eight = new Node(30);
    let nine = new Node(31);
    let ten = new Node(6);

    one.children.push(two);
    two.children.push(three);
    three.children.push(four);
    four.children.push(five);
    five.children.push(six);
    six.children.push(seven);
    seven.children.push(eight);
    eight.children.push(nine);
    nine.children.push(ten);

    let tree = new KaryTree();

    tree.root = one;

  });
  it('tree empty' , () => {
    let tree = new KaryTree();
    tree.root = null;
    let result = fizzBuzzTree(tree);
    expect(result.root).toEqual(undefined);
  });

  it('divide by 3' , () => {
    let tree = new KaryTree();
    tree.root = new Node(6);
    let result = fizzBuzzTree(tree);
    expect(result.root.value).toEqual('fizz');
  });

  it('divide by 5' , () => {
    let tree = new KaryTree();
    tree.root = new Node(20);
    let result = fizzBuzzTree(tree);
    expect(result.root.value).toEqual('buzz');
  });

  it('divide by 3 and 5' , () => {
    let tree = new KaryTree();
    tree.root = new Node(15);
    let result = fizzBuzzTree(tree);
    expect(result.root.value).toEqual('fizz buzz');
  });

  it('divide by 3 and 5' , () => {
    let tree = new KaryTree();
    tree.root = new Node(31);
    let result = fizzBuzzTree(tree);
    expect(result.root.value).toEqual('31');
  });

});


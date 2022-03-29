'use strict';

const BinarySearch =  require('../BinarySearchTree');

const Node =  require('../Node');

// let tree = null;

describe('Binary tree test' , () => {
  it('can successfully add a left child and right child properly to a node' , () => {
    let tree = new BinarySearch();

    tree.add(3);
    tree.add(4);
    tree.add(2);

    expect(tree.root.value).toEqual(3);

    expect(tree.root.right.value).toEqual(4);


    expect(tree.root.left.value).toEqual(2);
  });

  it('Returns true	false for the contains method, given an existing or non-existing node value' , () => {

    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    let tree = new BinarySearch(one);

    expect(tree.contain(7)).toEqual(true);
    expect(tree.contain(10)).toBe(false);
    expect(tree.contain(4)).toBe(true);
    expect(tree.contain(6)).toBe(true);
    expect(tree.contain(15)).toBe(false);
    expect(tree.contain(0)).toBe(false);
  });

});

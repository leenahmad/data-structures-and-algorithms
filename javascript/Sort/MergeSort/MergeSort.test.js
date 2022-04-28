'use strict';

const mergesort = require('./MergeSort');

describe('mergeSort test', () => {
  it('if it sort this array', () => {
    let arr = [8,4,23,42,16,15];
    mergesort(arr);
    expect (arr).toEqual([4,8,15,16,23,42]);
  });

  it('Reverse-sorted', () => {
    let arr = [20,18,12,8,5,-2];
    mergesort(arr);
    expect(arr).toEqual([-2,5,8,12,18,20]);
  });

  it('Few unique array', () => {
    let arr = [5,12,7,5,5,7];
    mergesort(arr);
    expect (arr).toEqual([5,5,5,7,7,12]);
  });

  it('Nearly-sorted array', () => {
    let arr = [2,3,5,7,13,11];
    mergesort(arr);
    expect (arr).toEqual([2,3,5,7,11,13]);
  });
});

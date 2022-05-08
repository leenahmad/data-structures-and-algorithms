const quickSort = require('./QuickSort');


describe('quickSort tests' , () => {
  it('sort this array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    quickSort(arr);
    expect(arr).toEqual([4,8,15,16,23,42]);
  });

  it('array in Reverse-sorted', () => {
    let arr = [20,18,12,8,5,-2];
    quickSort(arr);
    expect(arr).toEqual([-2,5,8,12,18,20]);
  });

  it('sort this Few unique array', () => {
    let arr = [5,12,7,5,5,7];
    quickSort(arr);
    expect(arr).toEqual([5,5,5,7,7,12]);
  });

  it(' sort this Nearly-sorted array', () => {
    let arr = [2,3,5,7,13,11];
    quickSort(arr);
    expect(arr).toEqual([2,3,5,7,11,13]);
  });

});

'use strict';


const insertionSort = require('../InsertionSort');

describe('Insertion Sort tests' , () =>{
  it('sort arr' , () =>{
    expect(insertionSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
  });
  it('sort arr 2' , () =>{
    expect(insertionSort([8,4,23,42,16,-5,15])).toEqual([-5,4,8,15,16,23,42]);
  });
  it('reverse sorted arr' , () =>{
    expect(insertionSort([42,23,16,15,8,4])).toEqual([4,8,15,16,23,42]);

  });

  it('few uniques arr' , () =>{
    expect(insertionSort([5,12,7,5,5,7])).toEqual([5,5,5,7,7,12]);

  });
  it('nearly sorted arr' , () =>{
    expect(insertionSort([4,8,15,16,42,23])).toEqual([4,8,15,16,23,42]);

  });
});

'use strict';

const brackets = require('../stack-queue-brackets');

describe('Brackets',()=>{

  it('Brackets are balanced 👍',()=>{
    let string = brackets('[({})]');

    expect(string).toBe(true);
  });

  it('Brackets are balanced 👍',()=>{
    let string = brackets('{}');

    expect(string).toBe(true);
  });

  it('Brackets are unbalanced and return false 👎', () => {
    let string = '[({}]';
    let string2='{(})';

    expect(brackets(string)).toBe(false);
    expect(brackets(string2)).toBe(false);

  });

  it('Brackets are not balanced 👎',()=>{
    let string = brackets('[({}]');

    expect(string).toBe(false);
  });

  it('Brackets are not balanced 👎',()=>{
    let string = brackets('(](');

    expect(string).toBe(false);
  });

  it('Brackets are balanced 👍',()=>{
    let string = brackets('(){}[[]]');

    expect(string).toBe(true);
  });

  it('Brackets are not balanced 👎',()=>{
    let string = brackets('{(})');

    expect(string).toBe(false);
  });

});

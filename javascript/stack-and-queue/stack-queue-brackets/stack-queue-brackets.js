'use strict';

function validatebrackets (string){

  let arr = [];
  let brackets = {
    ')' : '(',
    '}' : '{',
    ']' : '['

  };

  for (const char of string){
    if(!brackets[char]){
      arr.push(char);

    }else if (arr.pop() !== brackets[char]){
      return false;
    }
  }
  return arr.length ===0;

}

module.exports=validatebrackets;

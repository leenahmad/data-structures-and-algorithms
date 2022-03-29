'use strict';

function validatebrackets (string){

  let arr = [];
  let brackets = '[]{}()';

  for (let char of string){
    let index = brackets.indexOf(char);
    if(index === -1){
      continue;

    }
    if (index % 2 === 0){
      arr.push(index +1);
    }else {
      if(arr.pop() !== index)
        return false;
    }
  }
  return arr.length ===0;

}

module.exports=validatebrackets;

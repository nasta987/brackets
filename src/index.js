module.exports = function check(str, bracketsConfig) {
 let arr = [];

  for (let i = 0; i < str.length; i++) {
    let bracketStr = str[i];
    
   
    for (let j = 0; j < bracketsConfig.length; j++) {
      let openBracket = bracketsConfig[j][0];
      let closeBracket = bracketsConfig[j][1];
      
    
      if (bracketStr === openBracket) {
    
        if (openBracket === closeBracket) {
        
          if (arr[arr.length - 1] === openBracket) {
            arr.pop();
          } else {
            arr.push(bracketStr);
          }
        } else {
          arr.push(bracketStr);
        }
      }
    
      else if (bracketStr === closeBracket) {
      
        if (arr.length === 0 || arr.pop() !== openBracket) {
          return false;
        }
      }
    }
  }

  return arr.length === 0;
}

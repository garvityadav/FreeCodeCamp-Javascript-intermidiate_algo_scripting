function fearNotLetter(str) {
  let original = "abcdefghijklmnopqrstuvwxyz".split("");
  let stringSplit  = str.split("");
  let index = original.indexOf(stringSplit[0]); //0
  let lengthOfStr = str.split("").length;
  

  
  
  for(let i = 0;i<stringSplit.length;i++){
    if(stringSplit[i]!==original[index+i]){
      return original[index+i];
    }
  }
  return undefined;  // this return is not required as by default it will give undefined;
  
}

fearNotLetter("abce");  

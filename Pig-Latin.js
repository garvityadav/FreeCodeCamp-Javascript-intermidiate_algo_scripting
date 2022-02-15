function translatePigLatin(str) {
  if(/^(a|e|i|o|u)/g.test(str)){
    str = str+"way";
    console.log(str)
 return str;   
  }
 else{
   let index  =str.indexOf(str.match(/a|e|i|o|u/));
   if(index===-1){
     return str+"ay";
   }
   let newStr = str.slice(index);
   let remaining  = str.slice(0,index);   
   return newStr+remaining+"ay";
   }
 
}

translatePigLatin("consonant");
translatePigLatin("schwartz");
// translatePigLatin("algorithm");

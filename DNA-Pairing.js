function pairElement(str) {
  str= str.split("");
  let newArr  = [];
  str = str.map(input =>{
     if(input==="G"){
    newArr.push(["G","C"])
  }
  else if(input==="A"){
    newArr.push(["A","T"])
  }
  else if(input==="C"){
    newArr.push(["C","G"])
  }
else if(input==="T"){
    newArr.push(["T","A"])
  };
  
  });
 return newArr;
  
}

pairElement("GCG");

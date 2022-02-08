function diffArray(arr1, arr2) {
 let newArr = [];
if(arr1.length>arr2.length){ //if arr1 length is greater 
  for(let i = 0 ; i<arr1.length;i++){
    if(!arr2.includes(arr1[i])){  //to check if the arr2 has the index element of arr1
      newArr.push(arr1[i]);
      
    }
    if(!arr1.includes(arr2[i])){ // to check if the arr1 has the index element of arr2
     if(arr2[i]!==undefined){     // to not push the the undefined or empty element 
       newArr.push(arr2[i]);
     }
      
    }
  }
}
else if(arr2.length>arr1.length){    // if arr2 length is greater
  for(let i = 0 ; i<arr2.length;i++){
    if(!arr1.includes(arr2[i])){
      newArr.push(arr2[i]);
    }
    if(!arr2.includes(arr1[i])){
      if(!newArr.includes(arr1[i])){
        if(!arr1[i]===undefined){
      newArr.push(arr1[i]);}}
    }
    
  }
}
else if (arr1.length ===arr2.length){       // if both the array has same length 
  for(let i = 0 ; i<arr1.length;i++){
    if(!arr2.includes(arr1[i])){
      newArr.push(arr1[i]);
    }
    if(!arr1.includes(arr2[i])){
      newArr.push(arr2[i]);
    }
  }
}


 return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

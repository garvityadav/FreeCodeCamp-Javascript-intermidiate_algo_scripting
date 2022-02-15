function destroyer(arr) {
  let newArr = [...arguments];  //copying all the arguments in form of array
  let selectAarr = newArr.slice(1); //seprating the arguments
  let finalArr = [];

  for (let i = 0; i < arr.length; i++) {
      if(!selectAarr.includes(arr[i])){
        finalArr.push(arr[i]);
      }
  }

  return finalArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //should return [1,1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

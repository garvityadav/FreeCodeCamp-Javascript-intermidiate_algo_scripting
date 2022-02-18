function addTogether() {
  //copying the arguments to an array.
  let arr = [...arguments];

  if (arr.length > 2) {
    return undefined;
  }

  //if there is only one argument , return a function that takes an argument and returns sum of both arguments. 
  else if (arr.length == 1) {
    if (typeof (arr[0]) === "number")
      return function newfun(num) {
        if (typeof (num) === "number") {

          return num + arr[0];
        }
      }
  }


  else if (typeof (arr[0]) !== "number") {
    return undefined
  }
  else if (typeof (arr[1]) !== "number") {
    return undefined;
  }

  else { return arr[0] + arr[1] };
}


//test case
console.log(addTogether(2, "3"));
console.log(addTogether(2, 3));
console.log(addTogether(5)(7));

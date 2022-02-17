function dropElements(arr, func) {
  let index = [];
  /**
   * checking the condition
   */
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
        //break the loop once the condition satisfies
      break;
    }
    //push the index of first false elements
    index.push(arr.indexOf(arr[i]));
  }
  //removing the false elements
  let newArr = arr.splice(index[0], index.length);
  return arr;
}

//Test cases
console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  })
);
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
);
console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  })
);
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);

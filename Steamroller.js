/**
 * @ Is string an array?
Strings are declared similarly as arrays with the exception of char type. String is a contiguous sequence of values with a common name. Unlike arrays, strings are immutable which means their values cannot be modified once they are assigned.
 */

function steamrollArray(arr) {
  let newArr = [];

  //made a recursive function
  function flat(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length === undefined || typeof arr[i] === "string") {
        newArr.push(arr[i]);
      } else {
        flat(arr[i]);
      }
    }
  }

  flat(arr); //function call
  return newArr;
}

//test cases
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));

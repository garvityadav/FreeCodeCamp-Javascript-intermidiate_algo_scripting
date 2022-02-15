//with the help of arguments

function uniteUnique(arr) {
  let newArr = [...arguments];
  let finalArr = [];

  newArr = newArr.map((input) => {
    for (let i = 0; i < input.length; i++) {
      if (!finalArr.includes(input[i])) {
        finalArr.push(input[i]);
      }
    }
  });
  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // should return [1,3,2,5,4]

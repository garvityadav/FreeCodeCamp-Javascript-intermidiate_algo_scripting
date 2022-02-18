function binaryAgent(str) {
  let major = []; 
  str = str.split(" "); /*split the string to array */
  str = str.map((user) => {
    let minor = [];
    let arr = user.split("");
    arr = arr.map((temp) => {
      minor.push(parseInt(temp)); //convert string to number
    });
    major.push(minor); //push the elements in new array
  });
  major = major.map((user) => {
    let sum = 0;
    let j = user.length - 1; //j is used for the power 
    for (let i = 0; i < user.length; i++) {
      sum += user[i] * 2 ** j; //formula =0*2^7
      j--; //decrement j till 0
    };
    return sum;
  });
  major = major.map((user) => {
    return String.fromCharCode(user); //change decimal to charcters 
  });

  return major.join(""); //joining the arrays 
};

//test cases
console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

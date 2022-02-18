function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i][pre]);
    if (!collection[i].hasOwnProperty(pre)) {
      return false
    }

    else if (!collection[i][pre]) {
      return false
    }

  }
  return true;
}

//test case
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));


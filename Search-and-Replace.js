function myReplace(str, before, after) {
if(before.split("")[0]===before.split("")[0].toUpperCase()){
  let uppercase = after.split('')[0].toUpperCase();
  after = after.replace(after.split('')[0],uppercase);

  return str.replace(before,after);
}
 return str.replace(before,after.toLowerCase());
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")

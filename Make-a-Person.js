const Person = function (firstAndLast) {
  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];
  // Only change code below this line
  this.setFullName = (fullname) => {
    if (!fullname) {
      firstName = firstAndLast.split(/\s+/g)[0];
      lastName = firstAndLast.split(" ")[1];
    }
    else {
      firstName = fullname.split(/\s+/g)[0];
      lastName = fullname.split(/\s+/g)[1];
    }
    return firstName + ` ` + lastName
  };
  this.setFirstName = (first) => {
    if (!first) {
      return firstName;
    }
    else { return firstName = first };
  };
  this.setLastName = (last) => {
    if (!last) {
      return lastName;
    }
    return lastName = last;
  };
  this.getFirstName = () => {
    return firstName

  };
  this.getLastName = () => {
    return lastName;
  };
  this.getFullName = () => {
    return firstName + " " + lastName;

  }
};


//test cases
const bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getLastName())

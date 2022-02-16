function smallestCommons(arr) {
  //setup
  const [min, max] = arr.sort((a, b) => {return a - b;
  });
  let numberofDivisior = max - min + 1;

  // highest multiple
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }

  for (let multiple = max; multiple <= upperBound; multiple += max) {
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      
      if (multiple % i == 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberofDivisior) {
      return multiple;
    }
  }
}

console.log(smallestCommons([1, 5]));

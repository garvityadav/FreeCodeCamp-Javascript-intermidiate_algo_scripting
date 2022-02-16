/**
 * A simple but slow method of checking the primality of a given number "n" called trial division, tests whether "n" is a multiple of any integer between 2 and (sqr root)n"
 */

function sumPrimes(num) {
  //prime number checker
  let checkPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  //adding the prime numbers
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      sum = sum + i;
    }
  }
  console.log(sum);
  return sum;
}
/**
 * A simple but slow method of checking the primality of a given number "n" called trial division, tests whether "n" is a multiple of any integer between 2 and (sqr root)n"
 */

sumPrimes(10);

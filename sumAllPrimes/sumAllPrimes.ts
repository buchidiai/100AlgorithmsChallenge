function sumAllPrimes(num: number): number {
  var answer = 0;

  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      answer += i;
    }
  }
  return answer;
}

function isPrime(val) {
  //test if number is prime
  for (var i = 2; i <= val / 2; i++) {
    if (val % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));

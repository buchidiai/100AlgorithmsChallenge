function digitDegree(n: number): number {
  if (n < 10) {
    return n;
  }

  let answer = 0;
  let next = 0;

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  while (answer !== 1) {
    let arrayNumbers = numberToArray(n);
    console.log(arrayNumbers);
    let result = arrayNumbers.reduce(reducer);

    return result === 1 ? (answer = result) : result;
  }
}

function numberToArray(n) {
  return Array.from(String(n), Number);
}

// console.log(digitDegree(5));
//console.log(digitDegree(10));
console.log(digitDegree(91));

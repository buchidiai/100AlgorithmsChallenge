function digitDegree(n: number): number {
  if (n < 10) {
    return 0;
  }

  let result = 0;
  let arrayNumbers;

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  while (result !== 1) {
    arrayNumbers = numberToArray(n);

    if (arrayNumbers.length > 1) {
      result = arrayNumbers.reduce(reducer);

      if (result >= 10) {
        arrayNumbers = numberToArray(result);
        result = arrayNumbers.reduce(reducer);

        return result;
      }
    }
  }

  return result;
}

function numberToArray(n) {
  return Array.from(String(n), Number);
}

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));

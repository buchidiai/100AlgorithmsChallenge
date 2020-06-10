function houseNumbersSum(inputArray: number[]): number {
  let result = 0;

  for (const i of inputArray) {
    if (i === 0) return result;

    result += i;
  }
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));

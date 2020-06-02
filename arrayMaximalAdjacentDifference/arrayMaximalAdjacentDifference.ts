function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let max = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i + 1] !== undefined) {
      let absoluteValue = Math.abs(inputArray[i] - inputArray[i + 1]);
      if (absoluteValue > max) {
        max = absoluteValue;
        console.log(max);
      }
    }
  }
  return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));

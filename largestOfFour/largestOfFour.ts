function largestOfFour(nums: number[][]): number[] {
  const result = [];
  let largest = 0;

  for (const level0 of nums) {
    for (const level1 of level0) {
      largest = largest < level1 ? level1 : largest;
    }
    result.push(largest);
  }

  return result;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
);

function findClosestPair(numbers: number[], sum: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
      if (numbers[i] + numbers[j] === sum) {
        return [numbers[i], numbers[j]];
      }
    }
  }
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
// console.log(findClosestPair([2, 3, 7], 8));

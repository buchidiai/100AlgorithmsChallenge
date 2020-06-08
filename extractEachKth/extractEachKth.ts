function extractEachKth(inputArray: number[], k: number): number[] {
  return inputArray.filter((nums, index) => (index + 1) % k !== 0);
}

function extractEachKth1(inputArray: number[], k: number): number[] {
  let result = [];
  for (let i = 0; i < inputArray.length; i++) {
    if ((i + 1) % 3 !== 0) {
      result.push(inputArray[i]);
    }
  }

  return result;
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(extractEachKth1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
//

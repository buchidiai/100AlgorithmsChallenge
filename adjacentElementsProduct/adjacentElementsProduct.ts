function adjacentElementsProduct(inputArray: number[]): any {
  if (inputArray.length % 2 !== 0) {
    return "must be even array";
  }
  let product = [];
  let largest = 0;

  for (let i = 0; i < inputArray.length; i += 2) {
    if (inputArray[i + 1] !== undefined) {
      product.push(inputArray[i] * inputArray[i + 1]);
    }
  }

  for (const prod of product) {
    if (prod > largest) {
      largest = prod;
    }
  }
  return largest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

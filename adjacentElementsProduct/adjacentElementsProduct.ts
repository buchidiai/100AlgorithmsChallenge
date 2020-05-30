function adjacentElementsProduct(inputArray: number[]): any {
  if (inputArray.length % 2 !== 0) {
    return "must be even array";
  }
  let product = [];
  let largest = 0;

  for (let i = 0; i < inputArray.length - 1; i += 2) {
    product.push(inputArray[i] * inputArray[i + 1]);
  }

  for (const prod of product) {
    if (prod > largest) {
      largest = prod;
    }
  }
  return largest;
}

//more concise
function adjacentElementsProduct1(inputArray: number[]): any {
  if (inputArray.length % 2 !== 0) {
    return "must be even array";
  }

  //initialize largest product
  let largestProduct = inputArray[0] * inputArray[1];

  for (let i = 0; i < inputArray.length - 1; i++) {
    //product of two numbers
    const product = inputArray[i] * inputArray[i + 1];

    //if largestproduct is less than product  --> return value
    largestProduct = largestProduct < product ? product : largestProduct;
  }

  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -59, 7, 3]));

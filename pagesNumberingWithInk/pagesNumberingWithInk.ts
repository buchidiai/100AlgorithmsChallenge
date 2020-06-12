function pagesNumberingWithInk(
  current: number,
  numberOfDigits: number
): number {
  let limit = current + numberOfDigits;

  let result = 0;

  for (let i = current; i < limit; i++) {
    let itemLength = i.toString().length;
    result += itemLength;

    if (result >= numberOfDigits) {
      return result > numberOfDigits ? i - 1 : i;
    }
  }
}

console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));

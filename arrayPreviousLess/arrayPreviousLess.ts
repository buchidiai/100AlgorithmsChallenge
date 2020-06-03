function arrayPreviousLess(items: number[]): number[] {
  const firstItem = items[items.length - 1];
  const result = [];

  for (let i = items.length - 1; i >= 0; i--) {
    if (items[i] < items[i - 1]) {
      result.unshift(-1);
    } else if (items[i - 1] === undefined) {
      items[i] < firstItem ? result.unshift(-1) : result.unshift(items[i - 1]);
    } else {
      result.unshift(items[i - 1]);
    }
  }

  return result;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));

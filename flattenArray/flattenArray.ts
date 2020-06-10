function flattenArray(arr: any[]): any[] {
  const result = [];

  flatten(arr);

  function flatten(arr: any[]) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        result.push(element);
      }
    });
  }

  return result;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));

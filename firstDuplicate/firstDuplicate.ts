function firstDuplicate(a: number[]): number {
  let map = {};

  for (let i = 0; i < a.length; i++) {
    if (map.hasOwnProperty(a[i])) {
      return a[i];
    }

    map[a[i]] = map[a[i]] + 1 || 1;
  }

  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));

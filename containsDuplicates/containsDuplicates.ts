function containsDuplicates(a: number[]): boolean {
  let map = {};

  for (const i of a) {
    if (map[i]) {
      return true;
    }
    map[i] = map[i] + 1 || 1;
  }
  return false;
}

function containsDuplicates1(a: number[]): boolean {
  a = a.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      return true;
    }
  }

  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates1([3, 1]));

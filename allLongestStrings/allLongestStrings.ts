function allLongestStrings(inputArray: string[]): string[] {
  let max = 0;
  let array = [];

  for (const i of inputArray) {
    if (i.length >= max) {
      max = i.length;
      array.push(i);
    }
  }
  return array;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));

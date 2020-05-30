function addTwoDigits(n: number): number {
  let result: number = 0;
  if (n < 10) {
    return n;
  }

  for (const i of n.toString().split("")) {
    result += parseInt(i);
  }

  return result;
}

console.log(addTwoDigits(98765));

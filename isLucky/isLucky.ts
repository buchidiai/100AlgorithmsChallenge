function isLucky(n: number): boolean {
  const numArray = Array.from(String(n), Number);
  const len = numArray.length;
  const firstHalf = numArray.slice(0, len / 2);
  const rest = numArray.slice(len / 2, len);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return firstHalf.reduce(reducer) === rest.reduce(reducer);
}

console.log(isLucky(1230));
console.log(isLucky(239017));

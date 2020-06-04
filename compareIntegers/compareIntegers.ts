function compareIntegers(a: string, b: string): string {
  const intA = parseInt(a);
  const intB = parseInt(b);

  return intA > intB ? "greater" : intA >= intB ? "equal" : "less";
}

console.log(compareIntegers("12", "13"));
console.log(compareIntegers("875", "799"));
console.log(compareIntegers("1000", "1000"));

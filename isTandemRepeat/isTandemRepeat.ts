function isTandemRepeat(inputString: string): boolean {
  const strArr = inputString.split("");
  const len = strArr.length;

  const firstHalf = strArr.slice(0, len / 2).join("");
  const rest = strArr.slice(len / 2, len).join("");

  return firstHalf === rest;
}

console.log(isTandemRepeat("tandemtandem"));
console.log(isTandemRepeat("qqq"));
console.log(isTandemRepeat("2w2ww"));

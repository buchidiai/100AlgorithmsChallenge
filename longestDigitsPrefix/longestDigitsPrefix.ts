function longestDigitsPrefix(inputString: string): string {
  let string = inputString.split("");
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (parseInt(string[i]) && !isNaN(parseInt(string[i]))) {
      result += string[i];
    } else {
      return result;
    }
  }
  return result;
}

console.log(longestDigitsPrefix("123aa1"));
console.log(longestDigitsPrefix("9345345admsd"));

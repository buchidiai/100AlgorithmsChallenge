function firstDigit(inputString: string): string {
  let string = inputString.split("");

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i]))) {
      return string[i];
    }
  }
}

function firstDigit1(inputString: string): string {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const chars = inputString.split("");

  for (let i = 0; i < chars.length; i++) {
    if (digits.includes(chars[i])) {
      return chars[i];
    }
  }
}

console.log(firstDigit("var_1__Int"));
console.log(firstDigit("q2q-q"));
console.log(firstDigit1("0ss"));

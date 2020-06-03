function checkPalindrome(inputString: string): boolean {
  let newString = "";

  for (let i = inputString.split("").length; i >= 0; i--) {
    if (inputString[i] !== undefined) {
      newString += inputString[i];
    }
  }

  return inputString === newString;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));

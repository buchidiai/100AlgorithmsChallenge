function isCaseInsensitivePalindrome(inputString: string): boolean {
  return (
    inputString.toLowerCase().split("").reverse().join("") ===
    inputString.toLowerCase()
  );
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));

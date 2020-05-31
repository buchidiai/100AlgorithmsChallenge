function alphabetSubsequence(s: string): boolean {
  let chars: string[] = s.split("");
  let charValues: number[] = [];

  chars.forEach((char: string) => charValues.push(char.charCodeAt(0)));

  //check size if not the same there are duplicates
  //because sets dont have duplicates
  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  //check if order if backwards
  // letters should be in order e.g a,b,c,d, not z, b c, y
  for (let i = 0; i < charValues.length; i++) {
    if (charValues[i] >= charValues[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));

function missingLetters(str: string): string {
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const inputString = str.split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] !== inputString[i]) {
      return alphabet[i];
    }
  }

  return undefined;
}

const toArray = (str) => str.split("");

console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));

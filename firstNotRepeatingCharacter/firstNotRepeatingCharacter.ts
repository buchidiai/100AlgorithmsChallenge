function firstNotRepeatingCharacter(s: string): string {
  for (var i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (s.indexOf(c) === i && s.indexOf(c, i + 1) === -1) {
      return c;
    }
  }
  return "_";
}

console.log(firstNotRepeatingCharacter("abacabad"));
console.log(firstNotRepeatingCharacter("abacabaabacabaag"));
console.log(firstNotRepeatingCharacter("abacabaabacabaa"));

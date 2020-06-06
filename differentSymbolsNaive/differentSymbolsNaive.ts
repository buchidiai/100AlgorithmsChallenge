function differentSymbolsNaive(s: string): number {
  let string = s.split("");
  let hash = {};

  for (const i of string) {
    hash[i] = hash[i] + 1 || 1;
  }

  return Object.keys(hash).length;
}

function differentSymbolsNaive1(s: string): number {
  const uniqueChars: string[] = [];
  const inputChars: string[] = s.split("");

  inputChars.forEach((char) => {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  });

  return uniqueChars.length;
}

function differentSymbolsNaive2(s: string): number {
  const uniqueChars = new Set();
  const inputChars = s.split("");

  inputChars.forEach((char) => {
    uniqueChars.add(char);
  });

  console.log(uniqueChars);
  return uniqueChars.size;
}

console.log(differentSymbolsNaive("cabca"));
console.log(differentSymbolsNaive1("svdnidnv3fvn394ewr"));
console.log(differentSymbolsNaive2("svdnnvsde"));

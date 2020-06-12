function properNounCorrection(noun: string): string {
  let inputAray = noun.split("");
  let result = inputAray[0].toUpperCase();

  for (let i = 1; i < noun.length; i++) {
    result += noun[i].toLowerCase();
  }
  return result;
}

console.log(properNounCorrection("pARiS"));
console.log(properNounCorrection("John"));

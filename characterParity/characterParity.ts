function characterParity(symbol: string): string {
  const value = isNaN(parseInt(symbol));

  if (value) {
    return "not a digit";
  } else {
    return parseInt(symbol) % 2 === 0 ? "even" : "odd";
  }
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));

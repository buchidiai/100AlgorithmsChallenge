function evenDigitsOnly(n: number): boolean {
  const arrayNumbers = Array.from(String(n), Number);

  console.log(arrayNumbers);

  for (const i of arrayNumbers) {
    if (i % 2 !== 0) {
      return false;
    }
  }

  return true;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));

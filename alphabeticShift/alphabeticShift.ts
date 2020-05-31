function alphabeticShift(inputString: string): string {
  const alphabet: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let arrayString = inputString.split("");

  for (let i = 0; i < arrayString.length; i++) {
    let indexShifted = arrayString[i] && alphabet.indexOf(arrayString[i]) + 1;

    arrayString[i] = alphabet[indexShifted];
  }
  return arrayString.join("");
}

console.log(alphabeticShift("crazy"));

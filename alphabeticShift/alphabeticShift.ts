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

  let index = 0;
  let newString = "";

  for (let i of inputString.split("")) {
    if (i !== "z") {
      index = alphabet.indexOf(i) + 1;
    }

    newString += alphabet[index];
  }

  return newString;
}

console.log(alphabeticShift("crazy"));

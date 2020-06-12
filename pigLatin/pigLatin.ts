function pigLatin(str: string): string {
  const chars = str.split("");
  console.log(chars);

  const vowelRegex = /[aeiou]/;

  if (vowelRegex.test(str[0])) {
    return `${str}way`;
  }

  while (true) {
    if (!vowelRegex.test(chars[0])) {
      chars.push(chars.splice(0, 1)[0]);
    } else {
      break;
    }
  }

  str = chars.join("") + "ay";

  return str;
}

//console.log(pigLatin("glove"));
console.log(pigLatin("eight"));

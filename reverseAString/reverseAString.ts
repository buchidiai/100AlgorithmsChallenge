function reverseAString(str: string): string {
  return str.split("").reverse().join("");
}

function reverseAString2(str: string): string {
  let result = "";
  let inputString = str.split("");

  for (let i = inputString.length - 1; i >= 0; i--) {
    console.log(inputString[i]);

    result += inputString[i];
  }

  return result;
}

console.log(reverseAString("hello"));
console.log(reverseAString("Howdy"));

console.log(reverseAString2("hello"));
console.log(reverseAString2("Howdy"));

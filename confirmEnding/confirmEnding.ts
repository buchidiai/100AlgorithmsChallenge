function confirmEnding(str: string, target: string) {
  const string = str.split("");
  const targetString = target.split("");
  let result = "";

  for (let i = string.length - 1; i >= targetString.length - 1; i--) {
    result += string[i];
  }

  return result.split("").reverse().join("") === target;
}

function confirmEnding1(str: string, target: string) {
  const start = str.length - target.length;

  return str.substr(start) === target;
}

console.log(confirmEnding1("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));

function findEmailDomain(address: string): string {
  let string = address.split("@");
  console.log(string);

  for (let i = 0; i < string.length; i++) {
    return string[string.length - 1];
  }
}

function findEmailDomain1(address: string): string {
  const lastAtIndex = address.lastIndexOf("@");

  return address.slice(lastAtIndex + 1, address.length);
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain1('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));

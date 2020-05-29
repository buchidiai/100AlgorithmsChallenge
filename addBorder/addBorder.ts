function addBorder(picture: string[]): string[] {
  const border: number = picture[0].length + 3;
  let wall: string = "";

  for (let i = 0; i < border; i++) {
    wall += "*";
  }

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = picture[i] + "*";
    picture[i] = "*" + picture[i];
  }

  return picture;
}

function addBorder2(picture: string[]): string[] {
  let wall: string = "*".repeat(picture[0].length + 3);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }

  return picture;
}

console.log(addBorder(["i am the best", "You are not"]));
console.log(addBorder2(["i am the best", "You are not"]));

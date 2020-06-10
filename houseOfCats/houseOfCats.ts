function houseOfCats(legs: number): number[] {
  const cat = 4,
    person = 2,
    result = [];

  Math.floor(legs / cat) <= 0 ? null : result.push(Math.floor(legs / cat));

  result.push(Math.floor(legs / person));

  return result;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));

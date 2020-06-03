function centuryFromYear(year: number): number {
  const theYear = year.toString();

  if (theYear.split("").length <= 3) {
    return parseInt(theYear[0]);
  }

  let start = parseInt(theYear.slice(0, 2));
  let end = parseInt(theYear.slice(2, 4));

  return end >= 1 ? start + 1 : start;
}

console.log(centuryFromYear(1500));
console.log(centuryFromYear(1700));

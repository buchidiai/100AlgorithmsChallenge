function alternatingSums(a: number[]): number[] {
  let result: number[] = [];
  let team1 = 0;
  let team2 = 0;

  for (let i = 0; i < a.length; i += 2) {
    team1 += a[i];
    if (a[i - 1] !== undefined) {
      team2 += a[i - 1];
    }
  }
  result.push(team1, team2);

  return result;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));

function crossingSum(matrix: number[][], a: number, b: number): number {
  const columnTotal = matrix[a].reduce((a, b) => a + b);
  console.log(columnTotal);

  let rowTotal = 0;

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][b]);

    rowTotal += i !== a ? matrix[i][b] : 0;
  }
  console.log(rowTotal);

  return columnTotal + rowTotal;
}

console.log(
  crossingSum(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
    ],
    1,
    3
  )
);

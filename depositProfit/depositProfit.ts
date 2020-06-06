function depositProfit(
  deposit: number,
  rate: number,
  threshold: number
): number {
  let increasedAmount = deposit;
  let year = 0;

  while (threshold > increasedAmount) {
    increasedAmount += increasedAmount * (rate / 100);

    year++;
  }

  return year;
}

console.log(depositProfit(100, 20, 170));

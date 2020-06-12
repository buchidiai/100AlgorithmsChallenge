function minimalNumberOfCoins(coins: number[], price: number): number {
  let numOfCoins = 0;
  let remainingPrice = price;
  let sortCoins = coins.sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < sortCoins.length; i++) {
    numOfCoins += Math.floor(remainingPrice / sortCoins[i]);
    console.log(remainingPrice);
    remainingPrice = remainingPrice % sortCoins[i];
    console.log(remainingPrice);
  }

  return numOfCoins;
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));

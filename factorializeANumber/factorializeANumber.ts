function factorializeANumber(num: number): number {
  if (num <= 2) return num;

  return factorializeANumber(num - 1) * num;
}

function factorializeANumber1(num: number): number {
  let answer = 1;

  for (let i = 1; i <= num; i++) {
    answer *= i;
  }

  return answer;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber1(10));

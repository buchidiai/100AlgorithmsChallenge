function makeArrayConsecutive2(statues: number[]): number {
  const max = Math.max(...statues);
  console.log(max);

  const min = Math.min(...statues);
  console.log(min);
  const completeArray = [];

  for (let i = min; i <= max; i++) {
    console.log(i);

    completeArray.push(i);
  }

  return completeArray.length - statues.length;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));

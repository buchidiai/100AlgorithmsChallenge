function lateRide(n: number): number {
  let minInHour = 60;
  let result = [];

  if (n % minInHour === 0) {
    result.push(n / minInHour);
  } else {
    let hour = stringArrToNum(
      Math.floor(n / minInHour)
        .toString()
        .split("")
    );

    let mins = stringArrToNum((n % minInHour).toString().split(""));

    result.push(...hour, ...mins);
  }

  return result.reduce((a, b) => a + b);
}

function stringArrToNum(arr) {
  return Array.from(arr, Number);
}

console.log(lateRide(240));
console.log(lateRide(808));
console.log(lateRide(350));

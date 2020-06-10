function growingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
): number {
  let speed = 0;
  let days = 0;

  while (speed < desiredHeight) {
    speed += upSpeed;
    days++;

    if (speed < desiredHeight) {
      speed -= downSpeed;
    }
  }

  return days;
}

console.log(growingPlant(100, 10, 910));

function chunkyMonkey(arr: any[], size: number): any[][] {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let lastItemInArray = newArray[newArray.length - 1];

    !lastItemInArray || lastItemInArray.length === size
      ? newArray.push([arr[i]])
      : lastItemInArray.push(arr[i]);
  }

  return newArray;
}

// console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));

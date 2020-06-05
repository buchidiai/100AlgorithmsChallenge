function convertString(s: string, t: string): boolean {
  let origin = buildMap(s);
  let other = buildMap(t);
  let count = 0;

  for (const [k, v] of Object.entries(origin)) {
    if (other[k]) {
      count++;
    }
  }
  return count === t.split("").length;
}

const buildMap = (str) => {
  let map = {};
  for (const i of str.split("")) {
    map[i] = map[i] + 1 || 1;
  }

  return map;
};

console.log(convertString("ceoydefthf5iyg5h5yts", "codefights"));
console.log(convertString("addbyca", "abcd"));
console.log(convertString("abcdgfytfffghjjjk", "jftz"));

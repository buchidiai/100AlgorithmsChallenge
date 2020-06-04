function commonCharacterCount(s1: string, s2: string): number {
  const str1 = buildHash(s1);
  const str2 = buildHash(s2);
  let count = 0;

  for (const key in str1) {
    if (str2.hasOwnProperty(key)) {
      if (str2[key] < str1[key]) {
        console.log(str2[key]);

        count += str2[key];
      } else {
        console.log(str1[key]);
        count += str1[key];
      }
    }
  }

  return count;
}

function buildHash(str) {
  let hash = {};

  for (const i of str.split("")) {
    hash[i] = hash[i] + 1 || 1;
  }

  return hash;
}

console.log(commonCharacterCount("aabcc", "adcaa"));

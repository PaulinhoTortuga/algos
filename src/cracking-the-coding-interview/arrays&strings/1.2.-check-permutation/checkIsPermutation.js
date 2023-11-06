const checkIsPermutation = (str1, str2) => {
  //sort approach

  // const str1Sorted = str1.split("").sort().join("");
  // const str2Sorted = str2.split("").sort().join("");

  // if (str1Sorted === str2Sorted) {
  //   return true;
  // }
  // return false;

  // numbers approach
  if (str1.length !== str2.length) {
    return false;
  }
  const map = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (map.has(str1.charAt(i))) {
      map.set(str1.charAt(i), map.get(str1.charAt(i)) + 1);
    } else {
      map.set(str1.charAt(i), 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    map.has(str2.charAt(i)) &&
      map.set(str2.charAt(i), map.get(str2.charAt(i)) - 1);
    if (map.get(str2.charAt(i)) < 0 || !map.has(str2.charAt(i))) {
      return false;
    }
  }

  return true;
};

export default checkIsPermutation;

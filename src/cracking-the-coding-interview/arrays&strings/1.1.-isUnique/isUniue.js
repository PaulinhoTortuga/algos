export default function isUnique(str) {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.get(str.charAt(i))) {
      return false;
    }
    map.set(str.charAt(i), true);
  }
  return true;
}

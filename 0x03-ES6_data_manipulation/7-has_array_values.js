export default function hasValuesFromArray(set, array) {
  const testPresence = (curr) => set.has(curr);
  return array.every(testPresence);
}

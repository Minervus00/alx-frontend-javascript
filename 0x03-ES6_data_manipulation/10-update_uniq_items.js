export default function updateUniqueItems(map1) {
  if (typeof map1 !== 'object') {
    throw new Error('Cannot process');
  }
  // console.log(map1);
  map1.forEach((value, key) => {
    // console.log(key);
    if (value === 1) {
      map1.set(key, 100);
    }
  });
  return map1;
}

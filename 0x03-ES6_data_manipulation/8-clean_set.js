export default function cleanSet(set, startString) {
  const arr = [];
  set.forEach(
    (elm) => {
      if (elm.startsWith(startString) && startString !== '') {
        arr.push(elm.slice(startString.length));
      }
      return false;
    },
  );
  return arr.join('-');
}

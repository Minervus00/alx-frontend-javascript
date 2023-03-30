export default function cleanSet(set, startString) {
  const arr = [];
  if (startString !== '' && typeof startString === 'string') {
    set.forEach(
      (elm) => {
        if (elm !== undefined && elm.startsWith(startString)) {
          arr.push(elm.slice(startString.length));
        }
        return false;
      },
    );
  }
  return arr.join('-');
}

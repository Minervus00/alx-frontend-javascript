export default function setFromArray(arr) {
  const setArr = new Set();
  arr.map(
    (elm) => {
      setArr.add(elm);
    }
  )
  return setArr;
}

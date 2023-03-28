export default function createInt8TypedArray(length, position, value) {
  const arr = new ArrayBuffer(length);

  if (position >= length) {
    throw Error('Position outside range');
  } else {
    arr[position] = value;
  }
  return new DataView(arr);
}

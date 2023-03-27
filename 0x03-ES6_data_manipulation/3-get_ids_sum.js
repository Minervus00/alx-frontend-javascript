export default function getStudentIdsSum(arr) {
  return arr.reduce(
    (accumulator, curr) => accumulator + curr.id, 0,
  );
}

export default function getStudentsByLocation(arr, city) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter(
    (elm) => {
      if (elm.location === city) {
        return elm;
      }
      return false;
    },
  );
}

export default function createIteratorObject(report) {
  const array = [];
  for (const elm of Object.values(report.allEmployees)) {
    array.push(...elm);
  }

  return array;
}

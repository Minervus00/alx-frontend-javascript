export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(listEmployees) {
      return Object.keys(listEmployees).length;
    },
  };
}

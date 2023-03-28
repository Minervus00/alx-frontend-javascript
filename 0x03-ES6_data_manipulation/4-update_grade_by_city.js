export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter(
    (elm) => {
      const elm1 = elm;
      let found = false;
      if (elm1.location === city) {
        newGrades.map(
          (gradeObj) => {
            if (gradeObj.studentId === elm1.id) {
              elm1.grade = gradeObj.grade;
              found = true;
            }
            return false;
          },
        );
        if (!found) { elm1.grade = 'N/A'; }
        return elm1;
      }
      return false;
    },
  );
}

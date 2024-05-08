{
  // problem - 5
  interface Student {
    name: string;
    age: number;
    grades: number[];
  }
  function calculateAverageGrade(student: Student): number {
    const totalGrades: number = student.grades.reduce(
      (total, grade) => total + grade,
      0
    );
    const averageGrade: number = totalGrades / student.grades.length;
    return averageGrade;
  }
  const student1: Student = {
    name: "Sayed",
    age: 21,
    grades: [75, 80, 68, 88, 90],
  };

  const averageGradeForBob = calculateAverageGrade(student1);
  console.log(averageGradeForBob);
}

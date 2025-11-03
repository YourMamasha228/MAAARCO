



let students = [];
let idCounter = 0;

export function addStudent(name) {
  const student = { id: ++idCounter, name, grades: [] };
  students.push(student);
  return student;
}

export function addGrade(studentId, grade) {
  const s = students.find(st => st.id === studentId);
  if (s) s.grades.push(grade);
}

export function getAverage(studentId) {
  const s = students.find(st => st.id === studentId);
  if (!s || s.grades.length === 0) return 0;
  return s.grades.reduce((sum, g) => sum + g, 0) / s.grades.length;
}
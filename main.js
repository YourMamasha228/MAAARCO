import { addStudent, addGrade, getAverage } from "./function.js";

const s1 = addStudent("Аня");
addGrade(s1.id, 5);
addGrade(s1.id, 4);
console.log("Средний балл:", getAverage(s1.id));
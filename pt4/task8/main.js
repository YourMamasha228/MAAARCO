import studentManager from './studentManager.js';

const s1 = studentManager.addStudent("Аня");
studentManager.addGrade(s1.id, 5);
studentManager.addGrade(s1.id, 4);
console.log("Средний балл:", studentManager.getAverage(s1.id));
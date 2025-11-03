import { Student } from './student.js';

class StudentManager {
    constructor() {
        this.students = [];
        this.idCounter = 0;
    }
    
    addStudent(name) {
        const student = new Student(++this.idCounter, name);
        this.students.push(student);
        return student;
    }
    
    addGrade(studentId, grade) {
        const student = this.students.find(st => st.id === studentId);
        if (student) student.addGrade(grade);
    }
    
    getAverage(studentId) {
        const student = this.students.find(st => st.id === studentId);
        return student ? student.getAverage() : 0;
    }
}

export default new StudentManager(); 
export class Student{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.grades = [];
    }
    addGrade(garade){
        this.grades.push(grade);
    }
    getAverage(){
        if (this.grades.length === 0) return 0;
        this.grades.reduce((sum, g) => sum + g, 0) / this.grades.length;
    }
}
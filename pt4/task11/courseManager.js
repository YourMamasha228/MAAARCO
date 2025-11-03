let courses = [];
let courseIdCounter = 0;
function addCourse(title) {
    const course = { 
        id: ++courseIdCounter, 
        title 
    };
    courses.push(course);
    return course;
}
function getCourseById(id) {
    return courses.find(c => c.id === id);
}
function getAllCourses() {
    return courses;
}
export { addCourse, getCourseById, getAllCourses };

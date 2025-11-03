let lessons = [];
let lessonIdCounter = 0;
function addLesson(courseId, topic) {
    const lesson = { 
        id: ++lessonIdCounter, 
        courseId, 
        topic 
    };
    lessons.push(lesson);
    return lesson;
}
function getLessonById(id) {
    return lessons.find(l => l.id === id);
}
function getLessonsByCourseId(courseId) {
    return lessons.filter(l => l.courseId === courseId);
}

function getAllLessons() {
    return lessons;
}
export { addLesson, getLessonById, getLessonsByCourseId, getAllLessons };
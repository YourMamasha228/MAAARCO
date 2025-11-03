let attendance = [];
function markAttendance(userId, lessonId, present) {
    const userManager = require('./userManager');
    const lessonManager = require('./lessonManager');
    const user = userManager.getUserById(userId);
    const lesson = lessonManager.getLessonById(lessonId);
    if (!user || !lesson) {
        console.log("Ошибка: пользователь или урок не найдены");
        return false;
    }
    const existingRecord = attendance.find(a => a.userId === userId && a.lessonId === lessonId);
    if (existingRecord) {
        existingRecord.present = present; } 
        else {
        attendance.push({ 
            userId, 
            lessonId, 
            present,
            date: new Date()
        });
    }
    const status = present ? "присутствовал(а)" : "отсутствовал(а)";
    console.log(`${user.name} ${status} на уроке "${lesson.topic}"`);
    return true;
}
function showAttendance(courseId) {
    const courseManager = require('./courseManager');
    const lessonManager = require('./lessonManager');
    const userManager = require('./userManager');
    const course = courseManager.getCourseById(courseId);
    if (!course) {
        console.log("Курс не найден");
        return;
    }
    console.log("Посещаемость курса:", course.title);
    const courseLessons = lessonManager.getLessonsByCourseId(courseId);
    courseLessons.forEach(lesson => {
        console.log(`\nУрок: ${lesson.topic}`);
        const records = attendance.filter(a => a.lessonId === lesson.id);
        if (records.length === 0) {
            console.log("  Нет записей о посещаемости");
        } else {
            records.forEach(record => {
                const user = userManager.getUserById(record.userId);
                const status = record.present ? "✓ Присутствовал(а)" : "✗ Отсутствовал(а)";
                console.log(`  ${user.name}: ${status}`);
            });
        }
    });
}
function getUserAttendance(userId, courseId = null) {
    const userManager = require('./userManager');
    const lessonManager = require('./lessonManager');
    const user = userManager.getUserById(userId);
    if (!user) {
        console.log("Пользователь не найден");
        return;
    }
    let userAttendance = attendance.filter(a => a.userId === userId);
    if (courseId) {
        const courseLessons = lessonManager.getLessonsByCourseId(courseId);
        const courseLessonIds = courseLessons.map(l => l.id);
        userAttendance = userAttendance.filter(a => courseLessonIds.includes(a.lessonId));
    }
    return userAttendance;
}
function getAttendanceStats(courseId) {
    const courseManager = require('./courseManager');
    const lessonManager = require('./lessonManager');
    const userManager = require('./userManager');
    
    const course = courseManager.getCourseById(courseId);
    if (!course) {
        console.log("Курс не найден");
        return;
    }
    const courseLessons = lessonManager.getLessonsByCourseId(courseId);
    const students = userManager.getUsersByRole("student");
    console.log(`\nСтатистика посещаемости курса: "${course.title}"`);
    console.log(`Всего уроков: ${courseLessons.length}`);
    console.log(`Всего студентов: ${students.length}`);
    students.forEach(student => {
        const studentAttendance = getUserAttendance(student.id, courseId);
        const presentCount = studentAttendance.filter(a => a.present).length;
        const totalLessons = courseLessons.length;
        const attendanceRate = totalLessons > 0 ? (presentCount / totalLessons * 100).toFixed(1) : 0;
        
        console.log(`${student.name}: ${presentCount}/${totalLessons} (${attendanceRate}%)`);
    });
}
export { 
    markAttendance, 
    showAttendance, 
    getUserAttendance, 
    getAttendanceStats 
};
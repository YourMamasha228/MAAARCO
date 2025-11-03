let loans = [];
function loanBook(userId, bookId) {
    const userManager = require('./userManager');
    const bookManager = require('./bookManager');
    const user = userManager.getUserById(userId);
    const book = bookManager.getBookById(bookId);
    if (!user || !book) {
        console.log("Ошибка: пользователь или книга не найдены");
        return false;
    }
    
    if (!book.available) {
        console.log("Книга уже занята");
        return false;
    }
    const loan = {
        userId,
        bookId,
        loanDate: new Date()
    };
    loans.push(loan);
    bookManager.updateBookAvailability(bookId, false);
    console.log(`Книга "${book.title}" выдана пользователю ${user.name}`);
    return true;
}
function returnBook(bookId) {
    const bookManager = require('./bookManager');
    
    const loanIndex = loans.findIndex(loan => loan.bookId === bookId);
    if (loanIndex === -1) {
        console.log("Книга не была выдана");
        return false;
    }
    loans.splice(loanIndex, 1);
    bookManager.updateBookAvailability(bookId, true);
    const book = bookManager.getBookById(bookId);
    console.log(`Книга "${book.title}" возвращена`);
    return true;
}
export { loanBook, returnBook };
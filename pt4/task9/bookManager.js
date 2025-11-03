let books = [];
let bookIdCounter = 0;

function addBook(title, author) {
    const book = { 
        id: ++bookIdCounter, 
        title, 
        author, 
        available: true 
    };
    books.push(book);
    return book;
}
function listBooks() {
    console.log("Книги:");
    books.forEach(b => console.log(`${b.id}. ${b.title} (${b.author}) - ${b.available ? "Доступна" : "Занята"}`));
}
function getBookById(id) {
    return books.find(b => b.id === id);
}
function updateBookAvailability(bookId, available) {
    const book = getBookById(bookId);
    if (book) book.available = available;
}
export { addBook, listBooks, getBookById, updateBookAvailability };
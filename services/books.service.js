const bookSchema = require('../models/books.model');

const readBooks = () => new Promise((resolve, reject) => {
  bookSchema.find()
    .then((books) => resolve( books ))
    .catch((error) => reject({code: 500, message: error}))
});

const readBook = (id) => new Promise((resolve , reject) => {
  bookSchema.findById(id)
    .then((book) => resolve(book))
    .catch((error) => reject({code: 500, message: error}) );
});

const createBook = (book) => new Promise((resolve, reject) => {
  const bookDB = bookSchema(book);
  bookDB.save()
    .then(() => resolve({code: 201, message: "Book created successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

const updateBook = (id, book) => new Promise((resolve , reject) => {
  bookSchema.findByIdAndUpdate(id, book)
    .then(() => resolve({code: 201, message: "Book updated successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

const deleteBook = (id) => new Promise((resolve , reject) => {
  bookSchema.findByIdAndDelete(id)
    .then(() => resolve({code: 200, message: "Book deleted successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

module.exports = {
  readBooks,
  readBook,
  createBook,
  updateBook,
  deleteBook
} 
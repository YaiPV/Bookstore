const bookServices = require('../services/books.service');

const getBooks = (size) => new Promise((resolve, reject) => {
  try {
    let books = [];
    books = bookServices.readBooks()
    if(size){
      resolve(books.slice(0, size));
    }else{
      resolve( books );
    }
   
  } catch (error) {
    reject({code: 500, message: "Error unexpected", log: error });
  }
});

const getBook = (id) => new Promise((resolve, reject) => {
  try {
    resolve( bookServices.readBook(id) );
  } catch (error) {
    reject( error );
  }
});

const postBook = (body) => new Promise((resolve, reject) => {
  try {
    resolve( bookServices.createBook(body) );
  } catch (error) {
    reject(error);
  }
});

const putBook = (bookID, body) => new Promise((resolve, reject) => {
  try {
    resolve( bookServices.updateBook(bookID, body) );
  } catch (error) {
    reject(error);
  }
});

const deleteBook = (id) => new Promise((resolve, reject) => {
  try {
    resolve( bookServices.deleteBook(id) );
  } catch (error) {
    reject(error);
  }
});

module.exports = {
  getBooks,
  getBook,
  postBook,
  putBook,
  deleteBook
}
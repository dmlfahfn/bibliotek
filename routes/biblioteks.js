var express = require('express');
var router = express.Router();

let books = [
  {bookName: "Harry Potter", writer: "J.K. Rowling"},
  {bookName: "Da Vinci Code", writer: "Dan Brown"},
  {bookName: "To Kill a Mockingbird", writer: "Harper Lee"},
]

/* GET users listing. */
router.get('/', function(req, res, next) {

  let printBooks = `<h1> Books in the Library</h1>`
  for (book in books) {
    printBooks += `<div>${books[book].bookName}</div>`
  };

  printBooks += `</div>`;
  res.send(printBooks);
});

module.exports = router;
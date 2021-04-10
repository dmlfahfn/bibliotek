const e = require('express');
var express = require('express');
var router = express.Router();

let books = [
  {id: 1, bookName: "Harry Potter", writer: "J.K. Rowling", release: 1997, rented: false},
  {id: 2, bookName: "Da Vinci Code", writer: "Dan Brown", release: 2003, rented: false},
  {id: 3, bookName: "To Kill a Mockingbird", writer: "Harper Lee",release: 1960, rented: true },
]

/* GET users listing. */
router.get('/', function(req, res, next) {

  let printBooks = `<h1> Books in the Library</h1>`
  for (book in books) {
    printBooks += `<div>${books[book].bookName} <a href="/biblioteks/:id">Låna</a></div>`
  };

  printBooks += `<div><a href="/biblioteks/add">Lägg till en ny bok</a></div></div>`;
  res.send(printBooks);
});

router.get("/add", function(req, res) {

  let addBookForm = `<div<h2>Lägg till en ny bok</h2>
                    <form action="/biblioteks/add" method="post">
                    <div>Titel: <input type="text" name="bookName"></div>
                    <div>Författare: <input type="text" name="writer"></div>
                    <div>Skriven år: <input type="text" name="release"></div>
                    <div><button type="submit">Spara</button></div></form></div>`
  res.send(addBookForm);
});

router.post("/add", function(req, res) {
  console.log(req.body);

  let newBook = {bookName: req.body.bookName, writer: req.body.writer,release: req.body.release, rented: false};
  
  books.push(newBook);

  res.redirect("/biblioteks");
});

router.get("/:id", (req, res) => {
  
  let showBook = req.params.id;
  console.log(showBook);
  for (book in books){
    console.log(books[book].id);
    if(books[book].id == showBook)
    console.log(books[book].bookName);
  }
  // let borrowedBook = books.filter((book) => book.id == showBook);
  // console.log(borrowedBook);

  res.send(`<div><h2>Följande bok/böcker är utlånade:</h2>
          <div></div></div>`)
});

module.exports = router;
const express = require("express");

//database 
const Database = require("./database");

//initialization
const ourApp = express();
ourApp.use(express.json());
//rought      : /
//description : check the server
//access      : public
//method      : GET
//params      : none
//body        : none


ourApp.get /*http method*/ ("/" ,(request,response ) => {
     //return the response of json format
     response.json({massage:"server is working !!"});
});

//rought      : /book
//description : to get all books
//access      : public
//method      : GET
//params      : none
//body        : none

ourApp.get("/Book",(req,res) => {
     return res.json({ selva:Database.Book });  
});

//rought      : /book/:bookID
//description : to get a book base on ISBN
//access      : public
//method      : GET
//params      : bookID
//body        : none

ourApp.get("/Book/:bookID",(req,res) => {
     const getBook = Database.Book.filter(
          (boo) => boo.ISBN === req.params.bookID
     );
     return res.json({book : getBook});
});
  
//rought      : /book/c/:catagory
//description : to get a book base on catagory
//access      : public
//method      : GET
//params      : category
//body        : none
ourApp.get("/Book/c/:category",(req,res) => {
     const getBook = Database.Book.filter((book) => book.category.includes(req.params.category));
     return res.json({book:getBook});
});

//rought      : /book/a/:authors
//description : to get a book base on authors
//access      : public
//method      : GET
//params      : authors
//body        : none
ourApp.get("/Book/a/:authors",(req,res) => {
     const getBook = Database.Book.filter((book) => book.authors.includes(req.params.authors));
     return res.json({book:getBook});
});

//rought      : /author
//description : to get all author
//access      : public
//method      : GET
//params      : none
//body        : none
ourApp.get("/author",(req,res) => {
     return res.json({Authors:Database.Author});
});
 
//rought : /book/new
//description : to add a new book
//access : public
//method : post
//params : none
//body : none
ourApp.post("/book/new",(req,res) => {
     const newbook = req.body;
     Database.Book.push(newbook);
     return res.json(Database.Book);

});
//rought : /author/new
//description : to add a new author
//access : public
//method : post
//params : none
//body : none
ourApp.post("/author/new",(req,res) => {
     const  newAuthor = req.body;
     Database.Author.push(newAuthor);
     return res.json(Database.Author);
});

ourApp.post("/Publication/new",(req,res) => {
     const Publication = req.body;
     Database.Author.push(Publication);
     return res.json({ massage : "new Publication is added"});
});
//rought : /book/update
//description : to update a new book
//access : public
//method : put
//params : none
//body : none
ourApp.put("/book/update/:isbn",(req,res) => {
     const updatedBook = req.body;
     const isbn = req.params;
     const getBook = Database.Book.map((book) => 
     if (book.ISBN === isbnbook.ISBN === isbn) {
          
     } ()
     return (...book ,...updatedBook) );

});

//4000 is port number
ourApp.listen(4000, () => console.log("server is running....!"));

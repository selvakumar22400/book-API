const express = require("express");

//database 
const Database = require("./database");

//initialization
const ourApp = express();

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
     return res.json({ books:Database.Book });  
});

//rought      : /book/:bookID
//description : to get a book base on ISBN
//access      : public
//method      : GET
//params      : bookID
//body        : none

ourApp.get("/Book/:bookID",(req,res) => {
     const getBook = Database.Book.filter(
          (book) => book.ISBN === req.params.bookID
     );
     return res.json({book : getBook});
});
 
//rought      : /book/c/:catagory
//description : to get a book base on catagory
//access      : public
//method      : GET
//params      : catagory
//body        : none
ourApp.get("/Book/c/:catagory",(req,res) => {
     const getBook = Database.Book.filter(
          (book) => book.catagory.includes(req.params,catagory)
     );
     return res.json({book : getBook});
});

//4000 is port number
ourApp.listen(4000, () => console.log("server is running....!"));

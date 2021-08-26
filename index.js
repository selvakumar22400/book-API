const express = require("express");

//database 
const Database = require("./database");

//initialization
const ourApp = express();

ourApp.get /*http method*/ ("/" ,(request,response ) => {
     //return the response of json format
     response.json({massage:"server is working !!"});
});

ourApp.get("/Book",(req,res) => {
     return res.json({ books:Database.Book });  
});

ourApp.get("/Book/:bookID",(req,res) => {
     const getBook = Database.Book.filter(
          (book) => book.ISBN === req.params.bookID
     );
});

//4000 is port number
ourApp.listen(4000, () => console.log("server is running...."));

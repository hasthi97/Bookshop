const router = require("express").Router();
let Book = require("../models/Books")



router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const author = req.body.author;
    const pages=Number(req.body.pages);
    const genres=req.body.genres;
    
    const newBook = new Book({
        name,
        author,
        pages,
        genres
        
    })
    newBook.save().then(()=>{
        res.json("Book added")
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;
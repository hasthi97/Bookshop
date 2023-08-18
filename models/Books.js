const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const BookSchema = new Schema({

    name :{
        type : String,
        required : true
    },

    author :{
        type : String,
        required : true
    },


    pages :{
        type : Number,
        required : true
    },

    genres :{
        type : String,
        required : true
    }




})


const Book= mongoose.model("Book",BookSchema);

module.exports = Book;

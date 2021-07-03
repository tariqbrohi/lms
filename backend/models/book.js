
var mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    Id: {
        type: String,
        required : true
    },
    Title: {
        type: String, 
        required : true
    },
    ISBN: {
        type: Number, 
        required : true
    },
    No_of_copies : {
        type: Number, 
        required : true
    },
    Book_type : {
        type: String,
        required: true
    }
    
});



module.exports = mongoose.model('Book', bookSchema )  
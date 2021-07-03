
var mongoose = require('mongoose') ; 

const librarianSchema = new mongoose.Schema( {  
    Id: {
        type: String,
        required : true
    },
    Name: {
        type: String, 
        required : true
    },
    Email: {
        type: String, 
        required : true
    },
    Password: {
        type: String, 
        required : true
    }, 
} ) ; 

module.exports = mongoose.model('Librarian', librarianSchema )  





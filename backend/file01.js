
var http = require("http");
var express = require('express');
const { MongoServerSelectionError } = require("mongodb");
var app = express();
var mongoose = require("mongoose") ; 
var url = 'mongodb://localhost/dbLib'

var router = new express.Router() ; 
var bodyParser = require('body-parser');
var _ = require('underscore');
app.use(bodyParser.urlencoded()); 
// app.use(bodyParser.json()) ; 
// TO DO: Setup endpoints ...
app.use('/', router); 
var server = app.listen(app.get('port'), function() { 
console.log('Server up: http://localhost:' + app.get('port')); 
} ) ; 

mongoose.connect(url , {useNewUrlParser : true} )  ;
const con = mongoose.connection

app.listen(9000, () =>{
    console.log("Server Started");
})

con.on('open', function(){
    console.log( 'Connected...') 
})

const bookrouter = require('./models/book.js') ; 
app.use('/books', bookrouter) ; 
app.use(express.json()) 

module.exports = router ; 





  
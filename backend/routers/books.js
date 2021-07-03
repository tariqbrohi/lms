var express = require('express');
var router = new express.Router() ; 
var book = require('../models/book')



router.get('/', async (req, res) => { 
    res.send(" I am the message ") ;  
    try{ 
        const books= await book.find() ; 
        res.json(books) ;
    }catch (err){
        res.send('Error  '+err) 
    }
} ) 


router.post('/addBook',  async function(req, res) { 
    // insert the new item into the collection (validate first) 
    if(req.body.Id && req.body.Title && req.body.ISBN &&  
    req.body.No_of_copies && req.body.Book_type) { 
    
        var newBook = new Book({ 
        Id : req.body.Id , 
        Title : req.body.Tile , 
        ISBN : req.body.ISBN , 
        No_of_copies : req.body.No_of_copies , 
        Book_type : req.body.Book_type , 
    })  
    newBook.save( async (err,docs) => {
        if(!err) 
        {
            const a1 = await book.save()
            res.json(a1)  ; 
        } else console.log('Error while creating new record :  '+JSON.stringify (err, undefined,2 ) );
    } )

    } else { 
    res.json(500, { error: 'There was an error in insertion!' } ) ; 
    } 
    } ) ; 



router.get('/:id', async(req, res) =>{
    try{ 
        const book = await book.findById(req.params.Id) ; 
        res.json(book) ;
    }catch (err) { 
        res.send('Error  '+err ) 
    }
} ) ; 



router.patch('/:id', async(req, res) =>{
    try{ 
        const book = await book.findById(req.params.Id) ; 
        book.ISBN = req.body.ISBN ; 
        const a1 = await alien.save() ; 
        res.json(a1) ; 

    }catch (err) { 
        res.send('Error  '+err ) 
    }
} ) ; 

router.delete('/:id', async(req, res) => { 
    try{ 
        const book = await book.findByIdAndDelete(req.params.Id) ; 
        const a1 = await book.save() ; 
        res.json(a1) ; 
    }catch (err) { 
        res.send('Error  '+err ) ;
    } 
} ) ; 




module.exports = router;







var express = require('express');
var router = new express.Router() ; 
var librarian = require('../models/librarian')



router.get('/', async (req, res) => { 
    // res.send(" I am the message ") ;  
    try{ 
        const librarians= await librarian.find() ; 
        res.json(librarians) ;
    }catch (err){
        res.send('Error  '+err) 
    }
} ) 


router.post('/addLibrarian',  async function(req, res) { 
    // insert the new item into the collection (validate first) 
    if(req.body.Id && req.body.Name && req.body.email &&  
    req.body.password) { 
    
        var newLibrarian = new Librarian({ 
        Id : req.body.Id , 
        name : req.body.name , 
        email : req.body.email , 
        password : req.body.password
    } )   
    newLibrarian.save( async (err,docs) => {
        if(!err) 
        {
            const a1 = await newLibrarian.save()
            res.json(a1)  ; 
        } else console.log('Error while creating new record :  '+JSON.stringify (err, undefined,2 ) );
    } )

    } else { 
    res.json(500, { error: 'There was an error in insertion!' } ) ; 
    } 
    } ) ; 

router.get('/:id', async(req, res) =>{
    try{ 
        const Librarian = await librarian.findById(req.params.Id) ; 
        res.json(Librarian) ;
    }catch (err) { 
        res.send('Error  '+err ) 
    }
} ) ; 

router.patch('/:id', async(req, res) =>{
    try{ 
        const Librarian = await book.findById(req.params.Id) ; 
        Librarian.name = req.body.name ; 
        const a1 = await Librarian.save() ; 
        res.json(a1) ; 

    }catch (err) { 
        res.send('Error  '+err ) 
    }
} ) ; 

router.delete('/:id', async(req, res) => { 
    try { 
        const Librarian = await librarian.findByIdAndDelete(req.params.Id) ; 
        const a1 = await Librarian.save() ; 
        res.json(a1) ; 
    }catch (err) { 
        res.send('Error  '+err ) ; 
    } 
} ) ; 


module.exports = router 



















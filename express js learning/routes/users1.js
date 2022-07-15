const express = require('express');
const router = express.Router();


//function to list all the users
router.get('/',(req , res) =>{
    res.send("Users list");
})

// function to add a new user using html form
router.get('/new',(req , res)=>{
    res.send("Form to add new user");
})
// /means /users since we are in users file

router.post('/new',(req , res)=>{
    res.send("New user added");
})
// getting a user with id 
// !should be at last
router.get('/:id',(req , res)=>{
    res.send("User with id " + req.params.id);
})

module.exports = router;
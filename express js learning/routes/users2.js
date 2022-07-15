const express = require('express');
const router = express.Router();

router.get('/',(req , res) =>{
    res.send("Users list");
})

router.get('/new',(req , res)=>{
    res.send("Form to add new user");
})

router.route("/:id")
.get((req , res)=>{
    res.send("User with id " + req.params.id);
})
.put((req , res) =>{
    res.send(`Get user with id ${req.params.id}`);
})
.delete((req , res) =>{
    res.send(`Delete user with id ${req.params.id}`);
});

// middleware
router.param('id',(req , res , next , id)=>{
    console.log(`Param id is ${id}`);
    next();
});

module.exports = router;
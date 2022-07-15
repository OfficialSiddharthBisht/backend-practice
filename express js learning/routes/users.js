const express = require('express');
const router = express.Router();

router.use(logger);
router.get('/',(req , res) =>{
    res.send("Users list");
})

router.get('/new',(req , res)=>{
    res.send("Form to add new user");
})

router.route("/:id")
.get((req , res)=>{
    // console.log(req.user);
    res.send("User with id " + req.params.id);
})
.put((req , res) =>{
    res.send(`Get user with id ${req.params.id}`);
})
.delete((req , res) =>{
    res.send(`Delete user with id ${req.params.id}`);
});

const users = [{name : "Siddhu"} , {name  : "Siddharth"} , {name : "Sid"}];
router.param('id',(req , res , next , id)=>{
    req.user = users[id];
    next();
});

function logger(req , res , next){
    console.log(req.originalUrl);
    next();
}

module.exports = router;
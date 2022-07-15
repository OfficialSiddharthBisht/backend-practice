const { query } = require('express');
const express = require('express');
const app = express();

// global middleware
app.use(logger);

app.get('/', (req, res) => {
    res.send("Home Page");
    console.log("Home Page");
});

app.get('/users',auth,(req , res , next) => {
    console.log(`User is admin = ${req.admin}`);
    res.send("Users Page");
    console.log("Users Page");
    next();
});

// app.use(logger);

function logger(req , res , next){
    console.log(req.originalUrl);
    next();
}

function auth(req , res , next){
    if(req.query.admin === 'true'){
        req.admin = true;
        console.log("admin");
        next();
    }else{
        res.send('No auth')
    }
}

app.listen(3000)
const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.get('/',(req , res)=>{
    console.log("Working");
    res.render('index', {name : "Siddharth"});
})

const userRouter= require('./routes/users');
app.use('/users', userRouter);


app.listen(3000);
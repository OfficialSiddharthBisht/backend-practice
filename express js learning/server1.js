const express = require('express');
const app = express();
const fs = require('fs');

app.get('/',(req, res, next)=>{
    // res.writeHead(200,{'Content-Type' : 'text/html'})
    // fs.readFile('index.html',function(error,data){
    //     if(error){
    //         res.writeHead(404);
    //         res.write('Error : File not found');
    //     }else{
    //         res.write(data);
    //     }
    //     res.end();
    // })
    console.log("here");
    // res.status(200).send("Hi");
    // res.status(500).json({message : "Error"});
    res.status(200).download('index.html');
})

app.listen(3000);

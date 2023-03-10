const express = require('express');
const mongojs = require('mongojs');
const db = mongojs('fullstack',['users']);
const app = express();

app.use(express.json());

app.get('/data',(req,res)=>{
    res.send("Works fine")
})

app.post('/register',(req,res)=>{
    // save new user
   db.users.insert({name:req.body.name,pass:req.body.pass},(err,docs)=>{
    res.send('ok')
   })
   
})

app.post('/login',(req,res)=>{
    // find user from db
    db.users.find({name:req.body.username,pass:req.body.password},(err,docs)=>{
        if (docs.length == 1) {
            res.send({
                name: docs[0].name,
                token: docs[0]._id
            })
        }
    })
    
})

app.listen(9000,()=>{
    console.log("Listening on port 9000");
})
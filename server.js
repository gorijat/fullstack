const express = require('express');
const app = express();

app.use(express.json());

app.get('/data',(req,res)=>{
    res.send("Works fine")
})

app.post('/register',(req,res)=>{
    // save new user
   res.send('ok')
})

app.post('/login',(req,res)=>{
    // find user from db
    console.log(req.body);
    res.send('ok')
})

app.listen(9000,()=>{
    console.log("Listening on port 9000");
})
const express = require('express');
const app = express();

app.get('/data',(req,res)=>{
    res.send("Works fine")
})

app.listen(9000,()=>{
    console.log("Listening on port 9000");
})
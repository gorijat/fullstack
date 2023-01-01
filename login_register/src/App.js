import React from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {

    useEffect(()=>{
       axios.get('/data')
       .then(res =>{
        console.log(res.data);
       })
    },[])

    return (
        <h1>Hello</h1>
    )
}

export default App;
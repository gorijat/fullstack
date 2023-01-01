import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {

    useEffect(()=>{
       axios.get('/data')
       .then(res =>{
        console.log(res.data);
       })
    },[])

    return (
        <BrowserRouter>
         <Navbar />
         <Routes>
         <Route exact path="/" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
         </Routes>
        </BrowserRouter>
        
        
    )
}

export default App;
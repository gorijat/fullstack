import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";
import Home from "./pages/home/Home";


function App() {

    useEffect(()=>{
       axios.get('/data')
       .then(res =>{
        console.log(res.data);
       })
    },[])

    return (
        <Provider store={store}>
        <BrowserRouter>
        
         <Routes>
         <Route exact path="/" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/home" element={<Home/>} />
         </Routes>
        </BrowserRouter>
        </Provider>
        
        
    )
}

export default App;
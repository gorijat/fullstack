import React, { useState } from "react";
import AuthService from "../../services/Auth-servis";
import { useDispatch } from "react-redux";
import { setUser } from "./store/action";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function Login() {

    const [state,setState] = useState({username: "",password: ""})
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogin = ()=>{
        AuthService.login(state)
        .then(res => {
            AuthService.storeUserData(res.data);
            dispatch(setUser(res.data));
            navigate('/home')
        })
    }

    return(
        <>
        <Navbar />
        <div className="container">
            <h1>Login Page</h1>
            <div className="col-6 offset-3">
                <input type="text" placeholder="name" className="form-control"
                 onChange={ event => setState({...state,username:event.target.value})} /><br />
                <input type="password" placeholder="password" className="form-control"
                 onChange={ event => setState({...state,password:event.target.value})} /><br />
                <button onClick={onLogin} className="btn btn-info form-control">Press for login</button>
            </div>
        </div>
        </>
        
        
    )
}

export default Login;
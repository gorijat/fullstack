import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/Auth-servis";

function Register() {

    const [state,setState] = useState({name:"",pass:""})

    const navigate = useNavigate()

    const onRegister = ()=>{
         AuthService.register(state)
         .then(res => {
            if (res.data === "ok") {
                navigate('/')
            }else{
                navigate('/register')
            }
         })
    }

    return(
        <div className="container">
            <h1>Register Page</h1>
            <div className="col-6 offset-3">
                <input type="text" placeholder="name" className="form-control"
                 onChange={event =>setState({...state,name:event.target.value})} /><br />
                <input type="password" placeholder="password" className="form-control"
                 onChange={event => setState({...state,pass:event.target.value})} /><br />
                <button onClick={onRegister} className="btn btn-primary form-control">Press for registration</button>
            </div>
        </div>
        
    )
}

export default Register;
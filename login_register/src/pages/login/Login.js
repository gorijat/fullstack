import React, { useState } from "react";
import AuthService from "../../services/Auth-servis";

function Login() {

    const [state,setState] = useState({username: "",password: ""})

    const onLogin = ()=>{
        AuthService.login(state)
    }

    return(
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
        
    )
}

export default Login;
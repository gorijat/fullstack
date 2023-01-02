import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/Auth-servis";
import { removeUser, setUser } from "../login/store/action";
import { Link } from "react-router-dom";


const Home = ()=>{

    const userStore = useSelector(store => store.userStore);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(()=>{
        if (AuthService.getUserData() === null) {
            navigate('/')
        }
        if (userStore) {
            dispatch(setUser(AuthService.getUserData()))
        }
    },[])

    const onLogout = ()=>{
        AuthService.logout(navigate);
        dispatch(removeUser());
    }

    return (
        <>
        <nav className="navbar navbar-expand navbar-light bg-light">
            <Link to="/" className="navbar-brand">User: {userStore.name}</Link> 
            <ul className="navbar-nav ml-auto">
            <button onClick={onLogout} className="btn btn-warning">Logout</button>
            </ul>
        </nav>
        <div className="container">
            <div className="col-6 offset-3">
                <h3>Ovde sad nesto treba raditi,npr izlistati proizvode ili nesto slicno</h3>
            </div>
        </div>
        </>
        
    )
}

export default Home;
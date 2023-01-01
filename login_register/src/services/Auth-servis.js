import axios from "axios";

class AuthService{
    static register(body){
        return axios.post('/register',body)
    }
    static login(body){
        return axios.post('/login',body)
    }
}

export default AuthService;
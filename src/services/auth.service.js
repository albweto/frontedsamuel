
import axios from "axios";

const API_URL = 'http://localhost:8080/auth/';

class AuthService {
    login(user){
        return axios
        .post(API_URL + 'login',{
            nombreUsuario: user.username,
            password: user.password
        })
        .then(response =>{
            if(response.data.accestoken){
                localStorage.setItem('user',JSON.stringify(response.data));
            }
            return response.data;
        })
    }

    logout(){
        localStorage.removeItem('user');
    }

    register(user){
        return axios.post(API_URL + 'nuevo',{
            nombre: user.name,
            nombreUsuario: user.username,
            email: user.email,
            password: user.password

        })
    }
}

export default new AuthService();
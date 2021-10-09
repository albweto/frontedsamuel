import axios from 'axios';
import http from "../http-common"

import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/tarea/';
let user = JSON.parse(localStorage.getItem('user'));

class TareaService{

    getAllList(){
        return axios.get(API_URL + 'allAdmin',{headers: authHeader()});
    }
    getAllListByUser(){
        return http.get(API_URL + 'all/'+user.nombreUsuario,{headers: authHeader()});
    }

    registerTarea(data){
        console.log("header"+JSON.stringify(authHeader()));
        console.log("data"+JSON.stringify(data));
        return http.post("create", data,{headers: authHeader()})
    }

    deleteTarea(id){
        return http.delete('/delete/'+id,{headers: authHeader()})
    }
    
}
export default new TareaService();

import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/tarea/';


class TareaServices{

    getAllList(){
        return axios.get(API_URL + 'allAdmin',{headers: authHeader()});
    }
    getAllListByUser(){
        return axios.get(API_URL + 'all',{headers: authHeader()});
    }
    
}
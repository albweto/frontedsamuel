import axios from "axios";


let user = JSON.parse(localStorage.getItem('user'));
export default axios.create({
    baseURL: "http://localhost:8080/tarea/",
    headers: {
        "Content-type": "application/json",
        "Authorization": 'Bearer ' + user.token,
        "Access-Control-Allow-Origin": "*"
    }
});

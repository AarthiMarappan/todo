import axios from "axios";

const http = axios.create({
    baseURL: "http://172.24.167.109:8000/api",
    headers: {
        "Content-type": "application/json"
    }
});

export default http;
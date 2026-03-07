import axios from "axios";

const API = axios.create({
    baseURL : "https://ccrp-sj2e.onrender.com"
});

export default API;
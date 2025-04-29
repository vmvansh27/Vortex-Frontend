import axios from "axios";

const API = axios.create({
    baseURL: "https://one-firewall-alliance-backend.onrender.com/api",
});

// Attach token before every request
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // get fresh token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default API;

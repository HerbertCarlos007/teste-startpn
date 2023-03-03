import axios from 'axios'

const token = localStorage.getItem('token')

const api = axios.create({
    baseURL: 'http://localhost:4000/',
})

const requestIntercepter = (config) => {
    config.headers.Authorization =
        "Bearer " + localStorage.getItem("token");
    return config;
};

api.interceptors.request.use(requestIntercepter);
export default api
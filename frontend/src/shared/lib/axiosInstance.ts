import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.BASE_URL_API || 'http://localhost:3009',
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use(function (config) {
    const token = 'token'
    if (token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
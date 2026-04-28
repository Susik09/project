import axios from "axios";
import { UserStorage } from "../../entities/user/model/user-storage";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.BASE_URL_API || 'http://localhost:3009',
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use(function (config) {
    const token = UserStorage.getAccessToken()
    if (token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
axiosInstance.interceptors.response.use(
    (config) => config,
    async (error) => {
        const refreshToken = UserStorage.getRefreshToken()
        if(error.config.status === 401){
            const {data} = await axiosInstance.post<{accessToken:string}>("/auth/refresh",{refreshToken})
            if(data.accessToken){
                UserStorage.setAccessToken(data.accessToken)
                error.config.headers.Authorization = `Bearer ${data.accessToken}`
                return axiosInstance(error.config)
            }
        }
        return Promise.reject(error)
    }
)
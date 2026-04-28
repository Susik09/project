import type { IUserType } from "../types/user"

export const UserStorage = {
    setAccessToken:(token:string) => {
        localStorage.setItem("accessToken",token)
    },
    setRefreshToken:(token:string) => {
        localStorage.setItem("refreshToken",token)
    },
    setUserStorage:(user:IUserType) => {
        localStorage.setItem("user",JSON.stringify(user))
    },
    getAccessToken:() => localStorage.getItem("accessToken"),
    getRefreshToken:() => localStorage.getItem("refreshToken"),
    getUserStorage:() => {
        const user = localStorage.getItem("user")
        return user ? JSON.parse(user) : null
    },
    clearStorage:() => {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("user")
    }
}
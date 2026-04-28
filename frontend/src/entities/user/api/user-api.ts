import { axiosInstance } from "../../../shared/lib/axiosInstance";
import type { IUserLogin, IUserPromise, IUserRegister } from "../types/user";

export class UserApi{
    static async register(user:IUserRegister){
        const {data} = await axiosInstance.post<IUserPromise>("/auth/register",user)
        return data
    }
    static async login(user:IUserLogin){
        const {data} = await axiosInstance.post<IUserPromise>("/auth/login",user)
        return data
    }
    static async logout(){
        await axiosInstance.post<IUserPromise>("/auth/logout")
    }
}
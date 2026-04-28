import { isAxiosError } from "axios";
import { axiosInstance } from "../../../shared/lib/axiosInstance";
import type { IUserLogin, IUserPromise, IUserRegister, IUserType } from "../types/user";

export class UserApi{
    static async register(user:IUserRegister):Promise<{data:IUserPromise | null,error:string | null}>{
        try{
            const {data} = await axiosInstance.post("/auth/register",user)
            return {
                data,
                error:null
            }
        }catch(error){
            if(isAxiosError(error)){
                return {
                    data:null,
                    error:error.response.data
                }
            }
            if(error instanceof Error){
                return {
                    data:null,
                    error:error.message
                }
            }
            return {
                data:null,
                error:"Unknown errors"
            }
        }
    }
    static async login(user:IUserLogin):Promise<{data:IUserPromise | null,error:string | null}>{
        try{
            const {data} = await axiosInstance.post("/auth/login",user)
            return {
                data,
                error:null
            }
        }catch(error){
            if(isAxiosError(error)){
                return {
                    data:null,
                    error:error.response.data
                }
            }
            if(error instanceof Error){
                return {
                    data:null,
                    error:error.message
                }
            }
            return {
                data:null,
                error:"Unknown errors"
            }
        }
    }
    static async logout():Promise<{data:unknown | null,error:string | null}>{
        try{
            const {data} = await axiosInstance.post("/auth/logout")
            return {
                data,
                error:null
            }
        }catch(error){
            if(isAxiosError(error)){
                return {
                    data:null,
                    error:error.response.data
                }
            }
            if(error instanceof Error){
                return {
                    data:null,
                    error:error.message
                }
            }
            return {
                data:null,
                error:"Unknown errors"
            }
        }
    }
    static async userProfile():Promise<{data:IUserType | null,error:string | null}>{
        try{
            const {data} = await axiosInstance.get("/users/me")
            return {
                data,
                error:null
            }
        }catch(error){
            if(isAxiosError(error)){
                return {
                    data:null,
                    error:error.response.data
                }
            }
            if(error instanceof Error){
                return {
                    data:null,
                    error:error.message
                }
            }
            return {
                data:null,
                error:"Unknown errors"
            }
        }
    }
    static async userProfileUpdate(user:IUserRegister):Promise<{data:IUserType | null,error:string | null}>{
        try{
            const {data} = await axiosInstance.patch("/users/me",user)
            return {
                data,
                error:null
            }
        }catch(error){
            if(isAxiosError(error)){
                return {
                    data:null,
                    error:error.response.data
                }
            }
            if(error instanceof Error){
                return {
                    data:null,
                    error:error.message
                }
            }
            return {
                data:null,
                error:"Unknown errors"
            }
        }
    }
}
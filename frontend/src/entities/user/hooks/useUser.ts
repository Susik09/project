import { useMutation, useQuery } from "@tanstack/react-query"
import type { IUserLogin, IUserRegister } from "../types/user"
import { UserApi } from "../api/user-api"
import { UserStorage } from "../model/user-storage"
import { UserStore } from "../../../app/context/user-store"

const {setUser} = UserStore.getState()

export const useUserRegister = () => {
    return useMutation({
        mutationFn:(user:IUserRegister) => UserApi.register(user),
        onSuccess:(data) => {
            UserStorage.setAccessToken(data.data.accessToken)
            UserStorage.setRefreshToken(data.data.refreshToken)
            setUser(data.data.user)
        },
    })
}
export const useUserLogin = () => {
    return useMutation({
        mutationFn:(user:IUserLogin) => UserApi.login(user),
        onSuccess:(data) => {
            UserStorage.setAccessToken(data.data.accessToken)
            UserStorage.setRefreshToken(data.data.refreshToken)
            setUser(data.data.user)
        }
    })
}
export const useUserProfile = () => {
    return useQuery({
        queryKey:["users"],
        queryFn:() => UserApi.userProfile()
    })
}
export const useUserUpdateProfile = () => {
    return useMutation({
        mutationFn:(user:IUserRegister) => UserApi.userProfileUpdate(user),
        onSuccess:(data) => {
            setUser(data.data)
        }
    })
}
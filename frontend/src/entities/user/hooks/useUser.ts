import { useMutation } from "@tanstack/react-query"
import type { IUserLogin, IUserRegister } from "../types/user"
import { UserApi } from "../api/user-api"
import { UserStorage } from "../model/user-storage"

export const useUserRegister = () => {
    return useMutation({
        mutationFn:(user:IUserRegister) => UserApi.register(user),
        onSuccess:(data) => {
            UserStorage.setAccessToken(data.accessToken)
            UserStorage.setRefreshToken(data.refreshToken)
            UserStorage.setUserStorage(data.user)
        }
    })
}
export const useUserLogin = () => {
    return useMutation({
        mutationFn:(user:IUserLogin) => UserApi.login(user),
        onSuccess:(data) => {
            UserStorage.setAccessToken(data.accessToken)
            UserStorage.setRefreshToken(data.refreshToken)
            UserStorage.setUserStorage(data.user)
        }
    })
}
import { createStore } from "zustand";
import type { IUserType } from "../../entities/user/types/user";
import { UserStorage } from "../../entities/user/model/user-storage";

export interface IUserStore {
    user: IUserType | null,
    setUser: (value: IUserType) => void
}

export const UserStore = createStore<IUserStore>((set) => ({
    user: UserStorage.getUserStorage(),
    setUser: (value: IUserType) => {
        UserStorage.setUserStorage(value)
        set({ user: value })
    }
}))
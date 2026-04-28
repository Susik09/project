export interface IUserType {
    id: number
    email: string
    name: string
    password: string
    role: 'guest' | 'client' | 'manager'
    isActive: boolean
}

export interface IUserRegister{
    email:string,
    password:string,
    name:string
}
export interface IUserLogin {
    email:string,
    password:string
}
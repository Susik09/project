import z from "zod"


export const loginSchema = z.object({
    email:z.string().email("Неправильный формат почты").min(1,"поле почты обязательно"),
    password:z.string().min(6,"Длина пароля должна быть не менее 6 символов"),
})
export const registerSchema = z.object({
    email:z.string().email("Неправильный формат почты").min(1,"поле почты обязательно"),
    password:z.string().min(6,"Длина пароля должна быть не менее 6 символов"),
    repeatPassword:z.string().min(6,"Длина пароля должна быть не менее 6 символов"),
    name:z.string().min(1,"поле имени обязательно")
}).refine((data) => data.password == data.repeatPassword, {message: 'Пароли не совпадают', path: ['repeatPassword']})

export const updateSchema = z.object({
    email:z.string().email("Неправильный формат почты").min(1,"поле почты обязательно"),
    password:z.string().min(6,"Длина пароля должна быть не менее 6 символов"),
    name:z.string().min(1,"поле имени обязательно")
})

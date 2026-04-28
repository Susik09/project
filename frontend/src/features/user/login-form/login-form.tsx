import { useForm } from "react-hook-form"
import { useUserLogin } from "../../../entities/user/hooks/useUser"
import { loginSchema } from "../../../entities/user/model/user-schema"
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import type { IUserLogin } from "../../../entities/user/types/user"
import Loader from "../../../widgets/loader/loader"

export const LoginForm = () => {
    const { mutate, isPending,error,isError } = useUserLogin()
    const {
        register,
        handleSubmit,
        formState: { isValid, errors }
    } = useForm<IUserLogin>({
        resolver: zodResolver(loginSchema)
    })

    return (
        <form className="form-login" onSubmit={handleSubmit((data) => mutate({ email: data.email, password: data.password }))}>
            {isError && <h4>Ошибка: {error.message}</h4>}
            <label className="form-login__label">
                Email
                <input type="email" className="form-login__input" {...register("email")} placeholder="Email" />
                {errors.email && <p className="errorText">{errors.email.message}</p>}
            </label>
            <label className="form-login__label">
                Password
                <input type="password" className="form-login__input" {...register("password")} placeholder="password" />
                {errors.password && <p className="errorText">{errors.password.message}</p>}
            </label>
            {isPending ? (
                <Loader />
            ) : (
                <button className="form-login__button" disabled={!isValid}>Войти</button>
            )}
        </form>
    )
} 
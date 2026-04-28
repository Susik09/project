import { useForm } from "react-hook-form"
import { useUserRegister } from "../../../entities/user/hooks/useUser"
import { registerSchema } from "../../../entities/user/model/user-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import type { IUserRegister } from "../../../entities/user/types/user"

export const RegForm = () => {
    const { mutate } = useUserRegister()
    const {
        register,
        handleSubmit,
        formState: { isValid, errors }
    } = useForm<IUserRegister & { repeatPassword: string }>({
        resolver: zodResolver(registerSchema)
    })

    return (
        <form className="form-reg" onSubmit={handleSubmit((data) => mutate({ email: data.email, password: data.password, name: data.name }))}>
            <label>
                Email
                <input type="email" {...register("email")} placeholder="Email" />
                {errors.email && <p className="errorText">{errors.email.message}</p>}
            </label>
            <label>
                Password
                <input type="password" {...register("password")} placeholder="password" />
                {errors.password && <p className="errorText">{errors.password.message}</p>}
            </label>
            <label>
                Repeat Password
                <input type="password" {...register("repeatPassword")} placeholder="repeat password" />
                {errors.repeatPassword && <p className="errorText">{errors.repeatPassword.message}</p>}
            </label>
            <label>
                Name
                <input type="text" {...register("name")} placeholder="Name" />
                {errors.name && <p className="errorText">{errors.name.message}</p>}
            </label>
            <button disabled={!isValid}>Зарегистрироваться</button>
        </form>
    )
} 
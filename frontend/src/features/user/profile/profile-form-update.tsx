import { useForm } from "react-hook-form"
import type { IUserRegister } from "../../../entities/user/types/user"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateSchema } from "../../../entities/user/model/user-schema"
import { useUserUpdateProfile } from "../../../entities/user/hooks/useUser"
import Loader from "../../../widgets/loader/loader"

export const ProfileFormUpdate = () => {
    const { mutate, isPending, isError, error } = useUserUpdateProfile()
    const {
        register,
        handleSubmit,
        formState: { isValid, errors }
    } = useForm<IUserRegister>({
        resolver: zodResolver(updateSchema)
    })
    return (

            <form className="form-reg" onSubmit={handleSubmit((data) => mutate({ email: data.email, password: data.password, name: data.name }))}>
                {isError && <h4>Ошибка: {error.message}</h4>}
                <label className="form-reg__label">
                    Email
                    <input type="email" className="form-reg__input" {...register("email")} placeholder="Email" />
                    {errors.email && <p className="errorText">{errors.email.message}</p>}
                </label>
                <label className="form-reg__label">
                    Password
                    <input type="password" className="form-reg__input" {...register("password")} placeholder="password" />
                    {errors.password && <p className="errorText">{errors.password.message}</p>}
                </label>
                <label className="form-reg__label">
                    Name
                    <input type="text" className="form-reg__input" {...register("name")} placeholder="Name" />
                    {errors.name && <p className="errorText">{errors.name.message}</p>}
                </label>
                {isPending ? (
                    <Loader />
                ) : (
                    <button className="form-reg__button" disabled={!isValid}>Зарегистрироваться</button>
                )}
            </form>
    )
}
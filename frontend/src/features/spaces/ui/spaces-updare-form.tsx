import { useForm } from "react-hook-form";
import { useUpdateSpaces } from "../hook/useSpaces";
import type { ISpacesCreateType, ISpacesType } from "../../../entities/spaces/types/spaces-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSpaceValidate } from "../model/space.schemas";

interface SpacesUpdateFormProps{
    id: number,
    onClose: () => void
    space: ISpacesType
}

export default function SpacesUpdateForm({id, onClose, space}: SpacesUpdateFormProps) {
    const { mutate, isError, isPending, error } = useUpdateSpaces();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ISpacesCreateType>({
        mode: 'onChange',
        resolver: zodResolver(createSpaceValidate),
        defaultValues: space
    });

    return (
        <div>
            <h2>SpacesCreateForm</h2>
            {isError && <div>Error: {error?.message}</div>}
            <form
                onSubmit={handleSubmit((form: ISpacesCreateType) => {
                    mutate({form, id});
                    onClose()
                    reset()
                })}
            >
                <label>
                    Title:
                    <input type="text" placeholder="title" {...register('title')} />
                    {errors.title && <span>{errors.title.message}</span>}
                </label>
                <label>
                    Description:
                    <input type="text" placeholder="description" {...register('description')} />
                    {errors.description && <span>{errors.description.message}</span>}
                </label>
                <label>
                    Capacity:
                    <input
                        type="number"
                        placeholder="capacity"
                        {...register('capacity', { valueAsNumber: true })}
                    />
                    {errors.capacity && <span>{errors.capacity.message}</span>}
                </label>
                <label>
                    Rating:
                    <input
                        type="number"
                        placeholder="rating"
                        {...register('rating', { valueAsNumber: true })}
                    />
                    {errors.rating && <span>{errors.rating.message}</span>}
                </label>
                <label>
                    Price per hour:
                    <input
                        type="number"
                        placeholder="price per hour"
                        {...register('pricePerHour', { valueAsNumber: true })}
                    />
                    {errors.pricePerHour && <span>{errors.pricePerHour.message}</span>}
                </label>
                <label>
                    Zone type:
                    <select {...register('zoneType')}>
                        <option value="null">None</option>
                        <option value="open-space">Open space</option>
                        <option value="meeting-room">Meeting room</option>
                        <option value="private-office">Private office</option>
                    </select>
                    {errors.zoneType && <span>{errors.zoneType.message}</span>}
                </label>
                <button type="submit" disabled={isPending}>
                    {isPending ? 'Saved...' : 'Save space'}
                </button>
            </form>
        </div>
    );
}

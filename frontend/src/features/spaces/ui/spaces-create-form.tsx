import { useForm } from "react-hook-form"
import { useCreateSpaces } from "../hook/useSpaces"
import type { ISpacesCreateType } from "../../../entities/spaces/types/spaces-type"
import { zodResolver } from "@hookform/resolvers/zod"
import { createSpaceValidate } from "../model/space.schemas"

export default function SpacesCreateForm() {

    const {mutate, isError, isPending, data} = useCreateSpaces()

    const {
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm<ISpacesCreateType>({
        mode: 'onChange',
        resolver: zodResolver(createSpaceValidate)
    })

  return (
    <div>SpacesCreateForm
        {isError && <h3>{data}</h3>}
        <form onSubmit={handleSubmit((form) => {
            mutate(form)
        })}>
            <label>Title:
                <input type="text" placeholder="title" {...register('title')}/>
            </label>
            <label>Description:
                <input type="text" placeholder="description" {...register('description')}/>
            </label>
            <label>Images:
                <input type="text" placeholder="images" {...register('images')}/>
            </label>
            <label>Capacity:
                <input type="number" placeholder="capacity" {...register('capacity', {valueAsNumber: true})}/>
            </label>
            <label>Rating:
                <input type="number" placeholder="rating" {...register('rating', {valueAsNumber: true})}/>
            </label>
            <label>Price per hour:
                <input type="number" placeholder="price per hour" {...register('pricePerHour', {valueAsNumber: true})}/>
            </label>
            <label>Zone type: 
                <select {...register('zoneType')}>
                    <option value="open-space">Open space</option>
                    <option value="meeting-room">Meeting room</option>
                    <option value="private-office">Private office</option>
                </select>
            </label>
            <button type="submit" disabled={isPending}>Create space</button>
        </form>
    </div>
  )
}

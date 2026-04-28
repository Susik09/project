import { useState } from "react"
import { useDeleteSpaces } from "../../../features/spaces/hook/useSpaces"
import type { ISpacesType } from "../types/spaces-type"
import SpacesUpdateForm from "../../../features/spaces/ui/spaces-updare-form"
import { UserStore } from "../../../app/context/user-store"

interface SpacesCardProps {
  space: ISpacesType
}


export default function SpacesCard({ space }: SpacesCardProps) {

  const deleteSpace = useDeleteSpaces()
  const [show, setShow] = useState<boolean>(false)
  const { user } = UserStore.getState()

  return (
    <div>
      <h3>{space.title}</h3>
      <p>Description: {space.description}</p>
      <p>Capacity: {space.capacity}</p>
      <p>Rating: {space.rating}</p>
      <p>Zone type: {space.zoneType}</p>
      <p>Price per hour: {space.pricePerHour}</p>
      {user && (user.role === 'client' || user.role === 'manager' && (
        <>
          <button onClick={async () => deleteSpace.mutate(space.id)}>Delete</button>
          <button onClick={() => setShow(true)}>Edit</button>
        </>
      ))}
      {show && <SpacesUpdateForm space={space} id={space.id} onClose={() => setShow(false)} />}
      <hr />
    </div>
  )
}

import { useState } from "react"
import { useDeleteSpaces } from "../../../features/spaces/hook/useSpaces"
import type { ISpacesType } from "../types/spaces-type"
import SpacesUpdateForm from "../../../features/spaces/ui/spaces-updare-form"

interface SpacesCardProps{
  space: ISpacesType
}


export default function SpacesCard({space}: SpacesCardProps) {

  const deleteSpace = useDeleteSpaces()
  const [show, setShow] = useState<boolean>(false)

  return (
    <div>
      <h3>{space.title}</h3>
      <p>Description: {space.description}</p>
      <p>Capacity: {space.capacity}</p>
      <p>Rating: {space.rating}</p>
      <p>Zone type: {space.zoneType}</p>
      <p>Price per hour: {space.pricePerHour}</p>
      <button onClick={async () => deleteSpace.mutate(space.id)}>Delete</button>
      <button onClick={()=> setShow(true)}>Edit</button>
      {show && <SpacesUpdateForm space={space} id={space.id} onClose={() => setShow(false)}/>}
        <hr />
    </div>
  )
}

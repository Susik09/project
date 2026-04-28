import { useDeleteSpaces } from "../../../features/spaces/hook/useSpaces"
import type { ISpacesType } from "../types/spaces-type"

interface SpacesCardProps{
  space: ISpacesType
}


export default function SpacesCard({space}: SpacesCardProps) {

  const deleteSpace = useDeleteSpaces()

  return (
    <div>
      <h3>{space.title}</h3>
      <p>Description: {space.description}</p>
      <p>Capacity: {space.capacity}</p>
      <p>Rating: {space.rating}</p>
      <p>Zone type: {space.zoneType}</p>
      <p>Price per hour: {space.pricePerHour}</p>
      <button onClick={async () => deleteSpace.mutate(space.id)}>Delete</button>
      <button>Edit</button>
    </div>
  )
}

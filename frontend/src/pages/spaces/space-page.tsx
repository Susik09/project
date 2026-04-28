import SpacesCard from "../../entities/spaces/ui/spaces-card"
import { useSpaces } from "../../features/spaces/hook/useSpaces"
import SpacesCreateForm from "../../features/spaces/ui/spaces-create-form"

function SpacesPage() {

  const { data: spaces, isLoading, isError } = useSpaces()

  return (
    <div>SpacesPage
      {isLoading && <div>
        <h2>Loading...</h2>
      </div>}
      {isError && <div>
        <h2>{spaces?.error}</h2>
      </div>}
      <SpacesCreateForm />
      {spaces.data.map((space) => (
        <SpacesCard key={space.id} space={space} />
      ))}
    </div>
  )
}

export default SpacesPage
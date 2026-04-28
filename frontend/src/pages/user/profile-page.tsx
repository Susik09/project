import { useUserProfile } from "../../entities/user/hooks/useUser"
import { ErrorCard } from "../../widgets/error-card/error-card"
import Loader from "../../widgets/loader/loader"
import "../../features/user/profile/profile.scss"
import { useState } from "react"
import { Modal } from "../../widgets/modal/modal"
import { ProfileFormUpdate } from "../../features/user/profile/profile-form-update"

function ProfilePage() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: user, isLoading, refetch, isError } = useUserProfile()
  if (isLoading) return <Loader />
  if (isError) return <ErrorCard refetch={refetch} />
  return (
    <div className="profile-card">
      <h2 className="profile-card__title">Profile</h2>
      <div className="profile-card__elements">
        <div className="profile-card__name">
          <p className="profile-card__name-title">Name: {user.data.name}</p>
        </div>
        <div className="profile-card__role">
          <p className="profile-card__role-title">Role: {user.data.role}</p>
        </div>
        <div className="profile-card__isActive">
          <p className="profile-card__isActive-title">is Active: {user.data.isActive}</p>
        </div>
        <div className="profile-card__email">
          <p className="profile-card__email-title">Email: {user.data.email}</p>
        </div>
      </div>
      <button onClick={() => setIsOpen(true)}>Open Update Form</button>
      {isOpen && <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Форма обновления профиля"
      >
        <ProfileFormUpdate />
      </Modal>}
    </div>
  )
}

export default ProfilePage
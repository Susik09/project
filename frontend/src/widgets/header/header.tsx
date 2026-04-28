import { Link } from "react-router"
import { UserStorage } from "../../entities/user/model/user-storage"
import { UserApi } from "../../entities/user/api/user-api"
import { UserStore } from "../../app/context/user-store"

function Header() {
  const { user,setUser } = UserStore.getState()

  const logout = () => {
    UserStorage.clearStorage()
    UserApi.logout()
    setUser(null)
  }
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/spaces"}>Spaces</Link>
      <Link to={"/register"}>Register</Link>
      <Link to={"/login"}>Login</Link>
      {user?.role === "client" && (
        <>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/my-bookings"}>My Bookings</Link>
          <a href="" onClick={() => logout()}>Logout</a>
        </>
      )}
      {user?.role === "manager" && (
        <>
          <Link to={"/manage-bookings"}>Manage Booking</Link>
          <a href="" onClick={() => logout()}>Logout</a>
        </>
      )}
    </nav>
  )
}

export default Header
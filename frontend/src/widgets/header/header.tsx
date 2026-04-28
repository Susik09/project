import { Link } from "react-router"

function Header() {
  return (
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/spaces"}>Spaces</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/my-bookings"}>My Bookings</Link>
        <Link to={"/manage-bookings"}>Manage Booking</Link>
    </nav>
  )
}

export default Header
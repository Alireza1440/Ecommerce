import { Link } from "react-router-dom"
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import UserMenu from "./UserMenu"

function Navbar() {
  return (
    <nav className="flex justify-center">
      <div className="flex flex-row-reverse w-[70vw] justify-between p-1 pr-5">
        <Link to="/">
          <Logo />
        </Link>
        <SearchBar />
        <UserMenu />
      </div>
    </nav>
  )
}

export default Navbar
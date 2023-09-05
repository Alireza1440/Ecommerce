import { Link } from "react-router-dom"

function Logo() {
  return (
    <Link to="/">
      <img src="/images/logo.png" alt="لوگو" className="h-10" />
    </Link>
  )
}

export default Logo
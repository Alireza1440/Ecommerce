import { useModalDispatch } from "../contexts"

function MenuItem({ label, type, onMenuClose }) {
  const dispatch = useModalDispatch()
  return (
    <div className="hover:bg-gray-300 py-1 pr-1 cursor-pointer transition"
      onClick={() => {
        dispatch(`${type}/open`)
        onMenuClose()
      }}>
      {label}
    </div>
  )
}

export default MenuItem
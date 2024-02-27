import { useModalDispatch } from "../contexts/modalContext"
import { GrFormClose } from 'react-icons/gr'

function Modal({ body, footer, isOpen, type, size }) {
  const dispatch = useModalDispatch()
  return isOpen && (
    <div className="flex justify-center z-12">
      <div className="flex justify-center bg-black opacity-95 pt-16 fixed top-0 h-[100vh] w-[100vw]">
        <div className={`p-2 rounded-sm ${size} bg-white`}>
          <GrFormClose size='25px' onClick={() => dispatch(`${type}/close`)} style={{ marginBottom: '4px', cursor: 'pointer' }} />
          <hr />
          {body}
          {footer}
        </div>
      </div>
    </div>
  )
}

export default Modal
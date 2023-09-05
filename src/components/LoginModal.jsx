import Input from "./Input"
import Modal from "./Modal"
import { useModal } from "../contexts"

function LoginModal() {
  const { login: isOpen } = useModal()
  const body = (
    <form onSubmit={(e) => { e.preventDefault() }}>
      <Input id="email" type="email" label="ایمیل" />
      <Input id="password" type="password" label="کلمه عبور" />
      <div className="flex justify-center">
        <button type="submit" className="mt-4 p-4 w-40 bg-pink-600 text-white rounded-[4px]">
          ورود
        </button>
      </div>
    </form>
  )
  return <Modal body={body} isOpen={isOpen} type='login' size='w-[400px] h-[300px]' />
}

export default LoginModal
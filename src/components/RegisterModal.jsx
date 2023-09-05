import Modal from "./Modal"
import Input from "./Input"
import { useModal } from "../contexts"

function RegisterModal() {
  const { register: isOpen } = useModal()
  const body = (<form onSubmit={(e) => { e.preventDefault() }} className="flex flex-col justify-center">
    <Input id="fullName" label="نام و نام خانوادگی" />
    <Input id="email" type="email" label="ایمیل" />
    <Input id="password" type="password" label="کلمه عبور" />
    <Input id="confirmPassword" type="password" label="تکرار کلمه عبور" />
    <div className="flex justify-center">
      <button type="submit" className="mt-4 p-4 w-40 bg-pink-600 text-white rounded-[4px]">
        ثبت نام
      </button>
    </div>
  </form>)
  return <Modal body={body} isOpen={isOpen} type='register' size='w-[400px] h-[500px]' />
}

export default RegisterModal
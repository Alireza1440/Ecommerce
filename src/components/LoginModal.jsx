import Input from "./Input"
import Modal from "./Modal"
import { useModal } from "../contexts/modalContext"
import useForm from "../hooks/useForm"

function LoginModal() {
  const { registerToForm, handleSubmit } = useForm()
  const { login: isOpen } = useModal()
  const onSubmit = handleSubmit(({ email, password }) => {
    const allUsers = JSON.parse(localStorage.getItem('allUsers'))
    for (const u of allUsers) {
      if (u.email !== email) return alert('کاربر پیدا نشد!')
      if (u.pass !== password) return alert('کلمه عبور اشتباه است!!')
      localStorage.setItem('currentUser', JSON.stringify(u))
      return window.location.reload()
    }
  })
  const body = (
    <form onSubmit={onSubmit}>
      <Input {...registerToForm('email')} id="email" type="email" label="ایمیل" />
      <Input {...registerToForm('password')} id="password" type="password" label="کلمه عبور" />
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
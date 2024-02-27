import Modal from "./Modal"
import Input from "./Input"
import { useModal, useModalDispatch } from "../contexts/modalContext"
import useForm from "../hooks/useForm"
import { useUserDispatch } from '../contexts/userContext'

function RegisterModal() {
  const { registerToForm, handleSubmit } = useForm()
  const { register: isOpen } = useModal()
  const dispatchModal = useModalDispatch()
  const dispatchUser = useUserDispatch()
  const onSubmit = handleSubmit(({ fullName, email, password, confirmPassword }) => {
    if (password !== confirmPassword) return alert('کلمه عبور و تکرار کلمه عبور باید یکی باشند! ')
    if (localStorage.getItem(fullName)) return alert('کاربر با این ایمیل وجود دارد!')
    const newUser = {
      name: fullName,
      email,
      pass: password
    }
    localStorage.setItem('allUsers', JSON.stringify(
      [...JSON.parse(localStorage.getItem('allUsers')), newUser]
    ))
    dispatchUser({ type: 'set', payload: newUser })
    dispatchModal('register/close')
  })
  const body = (<form onSubmit={onSubmit} className="flex flex-col justify-center">
    <Input required {...registerToForm('fullName')} id="fullName" label="نام و نام خانوادگی" />
    <Input required {...registerToForm('email')} id="email" type="email" label="ایمیل" />
    <Input required {...registerToForm('password')} id="password" type="password" label="کلمه عبور" />
    <Input required {...registerToForm('confirmPassword')} id="confirmPassword" type="password" label="تکرار کلمه عبور" />
    <div className="flex justify-center">
      <button type="submit" className="mt-4 p-4 w-40 bg-pink-600 text-white rounded-[4px]">
        ثبت نام
      </button>
    </div>
  </form>)
  return <Modal body={body} isOpen={isOpen} type='register' size='w-[400px] h-[500px]' />
}

export default RegisterModal
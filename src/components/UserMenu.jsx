import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import MenuItem from './MenuItem'

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative'>
      <RxHamburgerMenu size='25px' className='cursor-pointer' onClick={() => setIsOpen(s => !s)} />
      {isOpen && (<div className='w-[100px] absolute z-10 bg-gray-100'>
        <MenuItem onMenuClose={() => setIsOpen(false)} label='ثبت نام' type='register' />
        <MenuItem onMenuClose={() => setIsOpen(false)} label='ورود' type='login' />
      </div>)}
    </div>
  )
}

export default UserMenu
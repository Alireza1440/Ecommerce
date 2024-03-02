import { useState } from 'react'
import { RxAvatar, RxHamburgerMenu } from 'react-icons/rx'
import { PiShoppingCart } from "react-icons/pi";
import MenuItem from './MenuItem'
import { useUser, useUserDispatch } from '../contexts/userContext';

function UserMenu() {
  const currentUser = useUser()
  const dispatchUser = useUserDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  return (
    !currentUser ? (<div className='relative'>
      <RxHamburgerMenu size='25px' className='cursor-pointer' onClick={() => setIsOpen(s => !s)} />
      {isOpen && (<div className='w-[100px] absolute z-10 bg-gray-100'>
        <MenuItem onMenuClose={() => setIsOpen(false)} label='ثبت نام' type='register' />
        <MenuItem onMenuClose={() => setIsOpen(false)} label='ورود' type='login' />
      </div>)}
    </div>)
      : (<div className='flex flex-row-reverse gap-5'>
        <div className='user-menu'>
          <RxAvatar size='35px' className='cursor-pointer' onClick={() => setIsUserMenuOpen(s => !s)} />
          {isUserMenuOpen && (<div className='w-[100px] absolute z-10 bg-white'>
            <div className='hover:bg-gray-300 py-1 pr-1 cursor-pointer transition'>پنل کاربری</div>
            <div className='hover:bg-gray-300 py-1 pr-1 cursor-pointer transition'>نشان شده ها</div>
            <div className='hover:bg-gray-300 py-1 pr-1 cursor-pointer transition' onClick={() => {
              dispatchUser({ type: 'remove' })
            }} >خروج</div>
          </div>)}
        </div>
        <PiShoppingCart size='35px' className="cart cursor-pointer" />
      </div>)
  )
}

export default UserMenu
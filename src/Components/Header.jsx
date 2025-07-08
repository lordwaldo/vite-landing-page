import React from 'react'
import logo from '../assets/ufc.png'
import profile from '../assets/profile.jpg'

export const Header = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center'>
        <img src={logo} className='h-[50px]'/>
        <ul className=' flex flex-row gap-7 text-white'>
            <li className='hover:scale-110 cursor-pointer transition-all
            hover:bg-red-700 px-3 py-1 pb-2 rounded-full hover:font-bold'>PPV</li>
            <li className='hover:scale-110 cursor-pointer transition-all
            hover:bg-red-700 px-3 py-1 pb-2 rounded-full hover:font-bold'>fight night</li>
            <li className='hover:scale-110 cursor-pointer transition-all
            hover:bg-red-700 px-3 py-1 pb-2 rounded-full hover:font-bold'>more</li>
        </ul>
        </div>
        <img src={profile}
        className='w-[50px] h-[50px] rounded-full m-5 invisible md:visible lg:visible' />
    </div>
  )
}

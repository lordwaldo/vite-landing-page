import React, { useState } from 'react'
import { Header } from './Header'
import { MoiveList } from './MoiveList'

export const HeroSection = () => {
    const [bannerImage,setBannerImage]=useState('https://3ca9a566.delivery.rocketcdn.me/wp-content/uploads/2019/03/ufc_barclays_1.jpg')
  return (
    <div>
        <div className=' absolute z-[-1] m-auto'>
            <img src={bannerImage} className='h-screen object-cover w-screen brightness-30' />
        </div>
        
        <div className=' h-48 absolute w-screen z-[-1] bg-gradient-to-b from-gray-900'>

        </div>
        <div className=' h-48 absolute bottom-0 w-screen z-[-1] bg-gradient-to-t mb-[-0px] from-gray-900'>

        </div>
        <Header />
        <div className='p-10'>
        <p className='text-[40px] font-bold text-white [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]'>UFC 233: Henry Cejudo<br></br> vs<br></br> Tj Dillashaw</p>
        <p className='text-red-500 font-large mt-6 '>UFC on ESPN+</p>
        <p className=' mt-5 bg-yellow-400 hover:scale-125
        text-white p-2 px-10 rounded-full w-[150px] text-center
        cursor-pointer hover:font-bold transition-all duration-300'>Play now</p>
        </div>
        <MoiveList />
    </div>
  )
}

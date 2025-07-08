import React from 'react'
import uFC1 from '../assets/ufc1.jpg'
import uFC2 from '../assets/ufc2.jpg'
import uFC3 from '../assets/ufc3.jpg'
import uFC4 from '../assets/ufc4.jpg'
import uFC5 from '../assets/ufc5.jpg'
import uFC6 from '../assets/ufc6.jpg'
import uFC7 from '../assets/ufc7.jpg'
import uFC8 from '../assets/ufc8.jpg'
import uFC9 from '../assets/ufc9.jpg'
import uFC10 from '../assets/ufc10.jpg'

export const MoiveList = () => {
    const videoList=[
        {
            id:1,
            image: uFC1
        },
        {
            id:2,
            image: uFC2
        },
        {
            id:3,
            image: uFC3
        },
        {
            id:4,
            image: uFC4
        },
        {
            id:5,
            image: uFC5
        },
        {
            id:6,
            image: uFC6
        },
        {
            id:7,
            image: uFC7
        },
        {
            id:8,
            image: uFC8
        },
        {
            id:9,
            image: uFC9
        },
        {
            id:10,
            image: uFC10
        },
    ];
  return (
    <div className='mt-10'>
    <p className='px-5 text-white text-[20px] font-bold'>Past pay-per-view</p>
    <div className=' w-full py-5 px-5 overflow-x-scroll
    scroll whitespace-nowrap scroll-smooth '>
       {
        videoList.map((item)=>(
            <div className='inline-block m-2 md:m-3' key={item.id}>
                <img src={item.image} className='w-[130px] h-[200px]
                transition-all rounded-2xl object-cover md:w-[160px] md:h-[240px]
                cursor-pointer hover:scale-125' />
            </div>
        ))
       } 
    </div>
    </div>
  )
}

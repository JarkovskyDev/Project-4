import React from 'react'
import image1 from "../assets/Rooms_image1.avif"
import image2 from "../assets/Rooms_image2.avif"
import image3 from "../assets/Rooms_image3.avif"

const Rooms = () => {
  return (
    <div name="rooms" className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam repellat repellendus quasi omnis ad porro.</p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full ' src={image1} alt="/" />
            <img className='row-span-2 object-cover w-full h-full ' src={image2} alt="/" />
            <img className='object-cover w-full h-full ' src={image3} alt="/" />
        </div>
    </div>
  )
}

export default Rooms
import React from 'react'
import image1 from "../assets/Plan_image1.avif"
import image2 from "../assets/Plan_image2.avif"
import image3 from "../assets/Plan_image3.avif"
import image4 from "../assets/Plan_image4.avif"
import image5 from "../assets/Plan_image5.avif"

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/*LEFT SIDE */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src={image1} alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={image2} alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={image3} alt="/" />
            <img className='row-span-3 object-cover w-full h-full p-2' src={image4} alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={image5} alt="/" />
        </div>
        {/*RIGHT SIDE */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, alias!</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore expedita accusantium maxime a perspiciatis, quisquam necessitatibus cum, vitae minima, eos iusto sint. Aliquid odio temporibus fuga rem id quas?</p>
        <div>
            <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
            <button className='bg-black text-white border-black hover-shadow-xl'>Book Your Trip</button>
        </div>
        </div>
    </div>
  )
}

export default Plan
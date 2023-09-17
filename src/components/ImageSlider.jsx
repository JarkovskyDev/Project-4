import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import lobster from "../assets/Slider_image1.avif"
import sushi from "../assets/Slider_image2.avif"
import pasta from "../assets/Slider_image3.avif"
import salmon from "../assets/Slider_image4.avif"

const ImageSlider = () => {
    const slides = [
        {
            url: lobster,
            title: 'Lobster',
        },
        {
            url: sushi,
            title: 'Sushi',
        }, {
            url: pasta,
            title: 'Pasta',
        }, {
            url: salmon,
            title: 'Salmon',
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0)     
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-[1440px] h-[580px] w-full m-auto py-16 px-4 relative group'>
        <div 
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500' 
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        {/* LEFT ARROW */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        {/* RIGHT ARROW */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>

        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
                 <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                    <RxDotFilled />
                </div>
            ))}
        </div>

    </div>
  )
}

export default ImageSlider
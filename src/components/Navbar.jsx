import React, {useState} from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        if(!nav) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    }

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
        <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
        <HiMenuAlt3 onClick={handleNav} className='z-20 text-white curor-pointer' size={25}/>
        <div className={nav ? ' ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
                            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
            <ul className={!nav ? "hidden" : 'flex flex-col fixed w-full h-full items-center justify-center'}>
                <li className='font-bold text-3xl p-8 hover:cursor-pointer'>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='font-bold text-3xl p-8 hover:cursor-pointer'>
                    <Link to="destinations" smooth={true} duration={500} onClick={handleNav}>
                        Destinations
                    </Link>    
                </li>
                <li className='font-bold text-3xl p-8 hover:cursor-pointer'>
                    <Link to="reservations" smooth={true} duration={500} onClick={handleNav}>
                        Reservations
                    </Link> 
                </li>
                <li className='font-bold text-3xl p-8 hover:cursor-pointer'>
                    <Link to="amenities" smooth={true} duration={500} onClick={handleNav}>
                        Amenities
                    </Link>
                </li>
                <li className='font-bold text-3xl p-8 hover:cursor-pointer'>
                    <Link to="rooms" smooth={true} duration={500} onClick={handleNav}>
                        Rooms
                    </Link>
                </li>
            </ul>


        </div>
    </div>
  )
}

export default Navbar 
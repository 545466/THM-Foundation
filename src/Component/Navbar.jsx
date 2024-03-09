import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from "../assets/images/Logo.jpeg"
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <>
      <header className='flex justify-between border-b-4  border-b-DarkGreen h-20 lg:h-24 items-center lg:justify-between'>
        <div className='flex items-center'>
        <img className='w-20 ml-10 lg:ml-20 ' src={logo} alt="" />
        <h1 className='font-bold hidden lg:flex text-DarkGreen'>TERRESTRIAL HUMANITARIAN EMPOWERMENT FOUNDATION</h1>
        </div>
        <nav className='lg:font-semibold'>
            <ul className={ open ? ' delay-75 transition-all duration-200 translate-x-0 text-center mr-20 h-screen flex lg:flex-row lg:right-0 lg:bg-White lg:bg-opacity-0 lg:text-DarkGreen lg:top-0 lg:static flex-col absolute w-full  font-semibold py-5 text-White bg-DarkGreen top-20 left-0' : ' flex lg:translate-x-0 flex-col absolute w-full top-20 lg:flex-row text-White mr-20 lg:top-0 lg:static lg:text-DarkGreen translate-x-2/3'}>
                <Link to={"/"} className=' lg:pb-0  pb-10 lg:pl-10 pt-5 lg:pt-0' >Home</Link>
                <Link to={"/AboutUs"} className=' lg:pb-0 lg:pl-10  pb-10' href="">About Us</Link>
                <Link to={"/ContactUS"} className=' lg:pb-0 lg:pl-10 pb-10' href="">Contact us</Link>
            </ul>
        </nav>
        <div onClick={(()=> setOpen(!open))} className=' flex mr-10 text-2xl text-DarkGreen lg:hidden' >
        {
          open ? <FaTimes /> : <FaBars  />
        }
        </div>
      </header>
    </>
  )
}

export default Navbar

import React from 'react'
import logo from "../assets/images/Logo.jpeg"
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
      <section className=' bg-DarkGreen text-White'>
          <div className=' flex flex-col lg:flex-row lg:justify-between px-10 lg:px-40 py-10'>
          <div className='flex lg:flex-col lg:w-1/4'>
            <img className='w-20' src={logo} alt="" />
            <h1 className='font-bold pl-5 lg:pl-0 lg:mt-5'>TERRESTRIAL HUMANITARIAN EMPOWERMENT FOUNDATION</h1>
          </div>
          <div className='flex flex-col lg:py-0 py-10'>
            <h1 className='font-bold text-xl'>Our Company</h1>
            <a className='pt-5' href="">Home</a>
            <a className='pt-5' href="">About Us</a>
            <a className='pt-5' href="">Contact Us</a>
            <a className='pt-5' href="">Terms & Conditions</a>
          </div>
          <div>
            <h1 className=' font-bold text-xl'>Social Media</h1>
            <div className='flex pt-5'>
            <FaLinkedin className='text-xl' />
            <FaFacebook className='text-xl mx-5'/>
            <FaTwitter className='text-xl' />
            </div>
          </div>
          </div>
      </section>
    </>
  )
}

export default Footer

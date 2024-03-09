import React from 'react'
import Health from "../assets/images/Health.jpeg"
import { motion } from 'framer-motion'
const Banner = () => {
  return (
    <>
      <section className='bg-DarkGreen text-White px-10 py-20 lg:text-center bg-'>
        <motion.section
      initial= {{ translateX:200}}
      whileInView = {{opacity: 1, translateX:0}}
      transition = {{duration: 0.6}} >
        <h1 className='font-bold text-3xl lg:text-5xl pt-10 lg:w-2/3 m-auto '>TERRESTRIAL HUMANITARIAN EMPOWERMENT FOUNDATION</h1>
        <p className='pt-5 lg:text-xl lg:w-5/12 m-auto'>We are dedicated towards the betterment to economic development of the nation, enhance peace and security to the women and all vulnerable</p>
        <button className='bg-White font-bold text-DarkGreen border-none px-8 py-3 rounded mt-10 mb-10'>About us</button>
      </motion.section>
      </section>
    </>
  )
}

export default Banner

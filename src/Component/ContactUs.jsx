import Navbar from "./Navbar"
import Footer from "./Footer"
import { FaLocationArrow, FaMailBulk } from 'react-icons/fa'
const ContactUs = () => {
  return (
    <>
      <section>
      <Navbar />
        <div className='lg:flex lg:justify-between lg:px-10'>
            <div className='px-10 lg:w-2/4'>
                <h1 className='font-bold text-DarkGreen pt-10 text-xl lg:text-center'>Send a Message</h1>
                <form action="" className='flex flex-col py-10'>
                    <input className='h-10 bg-Grey text-Black rounded-3xl mb-5 pl-5'  type="text" placeholder='Your Name' />
                    <input className='h-10 bg-Grey text-Black rounded-3xl mb-5 pl-5' type="email" placeholder='someone@gmail.com' />
                    <textarea className='rounded-3xl bg-Grey text-Black pl-5 pt-5 outline-none' placeholder='Message' cols="10" rows="10"></textarea>
                    <button className='bg-DarkGreen text-White mt-5 py-2 px-5 rounded-3xl'>Send Message</button>
                </form>
            </div>
            <div className='px-10'>
                <h1 className='font-bold text-DarkGreen pt-10 text-xl lg:text-center' >Contact Us</h1>
                <div className='flex items-center'>
                    <FaLocationArrow />
                   <p className=' pl-5 py-5'>N0 3 Alagbole Road, by Alapara Junction, Akute, Ogun State.</p>
                </div>
                <p className='pb-5'>Telephone / Whatsapp: 09058899311, 08094637958</p>
                <div className='flex items-center'>
                    <FaMailBulk />
                    <p className='pl-5'>terrestrialhef@gmail.com</p>
                </div>
            </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default ContactUs

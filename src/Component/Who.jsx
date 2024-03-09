import React, { useState } from "react";
import  { motion } from 'framer-motion'
import Data from "./Data"
const Who = () => {
  const [open,setOpen] = useState(true)
  function More() {
    setOpen(!open)
  }
  return (
    <>
      <section className="px-10 py-20 bg-Grey">
        <motion.div 
        initial= {{ translateX:200}}
        whileInView = {{opacity: 1, translateX:0}}
        transition = {{duration: 0.6}}>
          <h1 className="text-DarkGreen font-bold text-xl pb-5">
            WHO WE ARE, AND WHAT WE STAND FOR.
          </h1>
          <p>
            Welcome to Terrestrial Humanitarian Empowerment Foundation (THEF), a
            non-governmental charity organization dedicated to addressing
            critical social, environmental, humanitarian, and developmental
            issues worldwide. At THEF, we operate autonomously, driven by a
            mission that is unwavering in its commitment to effecting positive
            change. Through our non-profit structure, we ensure that every
            resource received is channeled back into our mission, helping us
            enhance our impact and reach those in need. Whether through our
            advocacy efforts, awareness campaigns, or community programs, our
            work is rooted in fostering independence, transparency, and
            accountability.
            <br /> <br />
            We are a collective of both paid professionals and dedicated
            volunteers who pool our expertise and resources to drive meaningful
            change. By advocating for causes we believe in and offering vital
            services without political constraints, we aim to uplift communities
            and champion the voices of the marginalized. Our commitment to
            transparency and accountability paves the way for trust among our
            partners, donors, beneficiaries, and the public ensuring that our
            impact is felt in tangible ways.
          </p>
        </motion.div>
        <h1 className="font-bold text-2xl text-DarkGreen text-center mt-20">WHAT WE DO</h1>
        <div className="lg:flex flex-wrap flex lg:center lg:px-10">
        {
          Data.map((Datas)=>{
            return(
              <div key={Datas.id} className="mt-20 lg:mt-10 lg:mx-10 bg-DarkGreen text-White rounded-2xl lg:w-1/4" >
                <img className="lg:h-40  lg:w-full" src={Datas.img} alt="" />
                <h1 className=" font-semibold text-xl pl-5 py-5">{Datas.Head}</h1>
                <p  className="px-5">{Datas.Text1} <span className={open ? "hidden" : "flex pt-5"}>{Datas.Text2}</span> </p>
                <button className="ml-5 my-5 font-semibold bg-White text-DarkGreen px-5 rounded py-2"  onClick={(()=>setOpen(!open))}>{open ? "Show More": "Show Less"}</button>     
              </div>
            )
          })
        }
        </div>
      </section>
    </>
  );
};

export default Who;

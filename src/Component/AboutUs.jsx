import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Data from "./AboutData";
import Data2 from "./Data2";
import Profile from "./Profile";
const AboutUs = () => {
  return (
    <>
      <section>
        <Navbar />
        <div className="px-10">
          {
            Data.map((data)=>{
              return(
                <div key={Data} className="py-10">
                  <h1 className="text-DarkGreen font-bold text-xl pb-3">{data.Head}</h1>
                  <p>{data.Text}</p>
                </div>
              )
            })
          }
          <h1 className="text-DarkGreen font-bold text-xl pb-3">Aims and Objective:</h1>
          {
                    Data2.map((data)=>{
                      return(
                        <div key={data} className="flex justify-between lg:items-center lg:justify-start pl-5 pb-5">
                          <li className=" text-2xl text-DarkGreen"></li>
                          <p>{data.tx}</p>
                        </div>
                      )
                    })
                  }
        </div>
        <div className="px-10 py-20">
            {
              Profile.map((profiles)=>{
                return(
                  <div key={profiles} className="pb-20">
                    <img className="w-full shadow lg:w-1/4 h-1/4" src={profiles.img} alt="" />
                    <h1 className="font-bold py-5 text-xl">{profiles.Position}</h1>
                    <p>{profiles.About}</p>
                    <p className="font-bold mt-5">{profiles.Profile}</p>
                    <p className="font-semibold">{profiles.Job1}</p>
                    <p>{profiles.Details1}</p>
                    <p className="font-semibold">{profiles.Job2}</p>
                    <p>{profiles.Details2}</p>
                    <p className="font-semibold">{profiles.Job3}</p>
                    <p>{profiles.Details3}</p>
                  </div>
                )
              })
            }
        </div>
        <Footer />
      </section>
    </>
  );
};

export default AboutUs;

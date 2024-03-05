"use client"

import Link from "next/link"
import { FaAws, FaGithub, FaReact } from "react-icons/fa"
import { RxOpenInNewWindow } from "react-icons/rx"
import { SiMysql, SiTailwindcss, SiTypescript } from "react-icons/si"


export const JpHospital = () => {
  
  return (
    <div 
      className="flex flex-col space-y-5 parent"
    >
      <div className="flex justify-between opacity-100 md:container">
        <div className="flex flex-col">
          <h3 className="text-white text-xl md:text-3xl font-bold">JP Hospital</h3>
          <Link 
            target="_blank" href="https://jp-hospital.vercel.app/" 
            className="flex items-center hover:underline text-white/60 text-sm md:text-md"
          >
            Live Demo 
            <RxOpenInNewWindow size={20}/>
          </Link>
        </div>
        <div className="flex flex-col items-end justify-start">
          <p className="text-white text-md md:text-lg font-bold">
            JAN 2024 - PRESENT
          </p>
          <Link 
            target="_blank" 
            href="https://github.com/MrJuanPabloTheCreator/JP-Hospital" 
            className="flex items-center space-x-1 text-white/60 text-sm md:text-md hover:underline"
          >
            <FaGithub size={24}/>
            <RxOpenInNewWindow size={20}/>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center">      
        <img src="iMacPro.png" className="hidden md:block absolute h-[430px] pjimg1"/>
        <img src="iMacPro.png" className="md:hidden h-[300px]"/>
        <div className="flex justify-end w-full md:h-[430px] opacity-100 md:container-text">
          <div className="flex flex-col justify-between w-[350px] space-y-10 md:space-y-0 py-10 md:my-20">
            <div className="flex flex-col">
              <h1 className="text-white font-bold text-2xl">
                Online Hospital Booking Platform
              </h1>
              <p className="text-white/60 text-md">
                Implemented precise doctor search, allowing users to select specialties and locate nearby practitioners. Utilizing
                geolocation data, the system promptly matches users with nearby doctors.
              </p>
            </div>
            <div className="flex items-center justify-between w-full text-white"> 
              <FaReact size={28}/>    
              <SiTypescript size={28}/>
              <SiTailwindcss size={28}/>
              <FaAws size={32}/>
              <SiMysql size={40}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
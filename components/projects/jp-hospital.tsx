"use client"

import Link from "next/link"
import { useEffect } from "react"
import { FaAws, FaGithub, FaReact } from "react-icons/fa"
import { RxOpenInNewWindow } from "react-icons/rx"
import { SiMysql, SiTailwindcss, SiTypescript } from "react-icons/si"


export const JpHospital = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('parent-visible');
        } else {
          entry.target.classList.remove('parent-visible');
        }
      });
    },{ rootMargin: '-50% 0px' });

    const hiddenElements = document.querySelectorAll('.parent');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div 
      className="flex flex-col space-y-10 md:space-y-5 parent"
    >
      <div className="flex justify-between opacity-100 md:container">
        <div className="flex flex-col">
          <h3 className="text-white text-xl md:text-3xl font-bold">JP Hospital</h3>
          <Link 
            target="_blank" href="https://jp-hospital.vercel.app/" 
            className="flex items-center hover:underline text-white/60 text-md md:text-md"
          >
            Live Demo 
            <RxOpenInNewWindow size={20}/>
          </Link>
        </div>
        <div className="flex flex-col items-end justify-start">
          <p className="text-white text-md font-bold">
            JAN 2024 - APRIL 2024
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
      <div className="flex flex-col items-center md:items-start md:h-[430px] md:flex-row justify-center">      
        <img src="iMacPro.png" className="hidden md:block absolute h-[430px] pjimg1"/>
        <img src="iMacPro.png" className="md:hidden w-[300px] mb-5"/>
        <div className="flex justify-end w-full opacity-100 md:container-text">
          <div className="flex flex-col justify-center md:w-[350px] space-y-5">
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
              <FaReact size={32}/>
              <SiTypescript size={28}/>
              <SiTailwindcss size={32}/>
              <FaAws size={36}/>
              <SiMysql size={44}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
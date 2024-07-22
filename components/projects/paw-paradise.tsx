import Link from 'next/link'
import React from 'react'
import { DiMongodb } from 'react-icons/di'
import { FaAws, FaGithub, FaGoogle, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { RiOpenaiFill } from 'react-icons/ri'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { SiMysql, SiTailwindcss, SiTypescript } from 'react-icons/si'

const PawParadise = () => {
    return (
        <div 
            className="flex flex-col space-y-10 md:space-y-5 parent"
        >
            <div className="flex justify-between opacity-100 md:container">
              <div className="flex flex-col">
                <h3 className="text-white text-xl md:text-3xl font-bold">Paw Paradise</h3>
                <Link target="_blank" href="https://paw-paradise.vercel.app/" className="flex items-center hover:underline text-white/60 text-sm md:text-md">Live Demo <RxOpenInNewWindow size={20}/></Link>
              </div>
              <div className="flex flex-col items-end justify-start">
                <p className="text-white text-md font-bold">JUNE 2024 - PRESENT</p>
                <Link target="_blank" href="https://github.com/MrJuanPabloTheCreator/e-commerce-demo" className="flex items-center space-x-1 text-white/60 text-sm md:text-md hover:underline">
                  <FaGithub size={24}/>
                  <RxOpenInNewWindow size={20}/>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start md:h-[430px] md:flex-row justify-center">      
              <img src="paw-paradise-2.png" className="md:hidden ml-[70px] w-[350px] sm:h-[400px] mb-5"/>
                <div className="flex justify-start w-full opacity-100 md:container-text">
                  <div className="flex flex-col justify-center md:w-[350px] space-y-10">
                    <div className="flex flex-col">
                      <h1 className="text-white font-bold text-2xl">E-Commerce Platform</h1>
                      <p className="text-white/60 text-md">
                        Designed and developed e-commerce platform with integrated user authentication mechanisms, including account
                        creation, Google OAuth, and an admin panel for product listing and management, ensuring protected routes
                        against unauthorized access
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full text-white">     
                      <SiTypescript size={28}/>
                      <FaReact size={28}/>
                      <FaAws size={32}/>
                      <SiMysql size={40}/>
                      <FaGoogle size={28}/>
                    </div>
                  </div>
                </div>
              <img src="paw-paradise-2.png" className="hidden md:block absolute h-[330px] pjimg3"/>
            </div>
        </div>
    )
}

export default PawParadise
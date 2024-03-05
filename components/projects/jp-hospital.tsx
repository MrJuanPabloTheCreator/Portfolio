"use client"

import Link from "next/link"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { RxOpenInNewWindow } from "react-icons/rx"


export const JpHospital = () => {

    return (
        <div 
            className="flex flex-col space-y-5 parent"
        >
            <div className="flex justify-between">
              <div className="flex flex-col text">
                <h3 className="text-white text-3xl font-bold">JP Hospital</h3>
                <Link target="_blank" href="https://jp-hospital.vercel.app/" className="flex items-center hover:underline text-white/60 text-md">Live Demo <RxOpenInNewWindow size={20}/></Link>
              </div>
              <div className="flex flex-col items-end justify-start text">
                <p className="text-white text-lg font-bold">JAN 2024 - PRESENT</p>
                <Link target="_blank" href="https://github.com/MrJuanPabloTheCreator/JP-Hospital" className="flex items-center space-x-1 text-white/60 text-md hover:underline">
                  <FaGithub size={24}/>
                  <RxOpenInNewWindow size={20}/>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">      
                <img src="iMacPro.png" className="absolute h-[430px] pjimg1"/>
                <div className="flex justify-end w-full h-[430px]">
                    {/* <p className="text text-white font-semibold text-2xl">Here is my text</p> */}
                </div>
            </div>
        </div>
    )
}
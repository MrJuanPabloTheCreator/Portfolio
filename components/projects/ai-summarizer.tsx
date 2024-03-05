"use client"

import Link from "next/link"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { RxOpenInNewWindow } from "react-icons/rx"


export const AiSummarizer = () => {
    const [expand, setExpand] = useState(false);

    return (
        <div 
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)} 
            className="flex flex-col space-y-5 parent"
        >
            <div className="flex justify-between">
              <div className="flex flex-col text">
                <h3 className="text-white text-3xl font-bold">AI Summarizer</h3>
                <Link target="_blank" href="https://article-summarizer-hazel.vercel.app/" className="flex items-center hover:underline text-white/60 text-md">Live Demo <RxOpenInNewWindow size={20}/></Link>
              </div>
              <div className="flex flex-col items-end justify-start text">
                <p className="text-white text-lg font-bold">OCT 2023 - NOV 2023</p>
                <Link target="_blank" href="https://github.com/MrJuanPabloTheCreator/Article-Summarizer" className="flex items-center space-x-1 text-white/60 text-md hover:underline">
                  <FaGithub size={24}/>
                  <RxOpenInNewWindow size={20}/>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">      
              <div className="flex justify-start w-full h-[430px]">
                {/* <p className="text text-white font-semibold text-2xl">Here is my text</p> */}
              </div>
              <img src="MacBookSum.png" className="absolute h-[430px] pjimg2"/>
            </div>
        </div>
    )
}
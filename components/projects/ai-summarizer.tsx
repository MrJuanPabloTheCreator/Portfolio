"use client"

import Link from "next/link"
import { useState } from "react"
import { FaGithub, FaReact } from "react-icons/fa"
import { RxOpenInNewWindow } from "react-icons/rx"
import { RiOpenaiFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si"


export const AiSummarizer = () => {
    const [expand, setExpand] = useState(false);

    return (
        <div 
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)} 
            className="flex flex-col space-y-5 parent"
        >
            <div className="flex justify-between">
              <div className="flex flex-col container">
                <h3 className="text-white text-3xl font-bold">AI Summarizer</h3>
                <Link target="_blank" href="https://article-summarizer-hazel.vercel.app/" className="flex items-center hover:underline text-white/60 text-md">Live Demo <RxOpenInNewWindow size={20}/></Link>
              </div>
              <div className="flex flex-col items-end justify-start container">
                <p className="text-white text-lg font-bold">OCT 2023 - NOV 2023</p>
                <Link target="_blank" href="https://github.com/MrJuanPabloTheCreator/Article-Summarizer" className="flex items-center space-x-1 text-white/60 text-md hover:underline">
                  <FaGithub size={24}/>
                  <RxOpenInNewWindow size={20}/>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">      
                <div className="flex justify-start w-full h-[430px] container-text">
                  <div className="flex flex-col justify-between w-[350px] my-20">
                    <div className="flex flex-col">
                      <h1 className="text-white font-bold text-2xl">AI Article Summarizer</h1>
                      <p className="text-white/60 text-md">
                        Scraped web page articles and summarized their content using the OpenAI API.
                        Developed a user-friendly web application for users to input article URLs.
                        Stored the extracted data in MongoDB for future reference
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full text-white">     
                      <FaReact size={28}/>
                      <IoLogoJavascript size={28}/>
                      <SiTailwindcss size={28}/>
                      <RiOpenaiFill size={28}/>
                      <DiMongodb size={28}/>
                    </div>
                  </div>
                </div>
              <img src="MacBookSum.png" className="absolute h-[430px] pjimg2"/>
            </div>
        </div>
    )
}
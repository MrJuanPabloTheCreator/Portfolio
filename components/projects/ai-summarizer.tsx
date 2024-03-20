"use client"

import Link from "next/link"
import { FaGithub, FaReact } from "react-icons/fa"
import { RxOpenInNewWindow } from "react-icons/rx"
import { RiOpenaiFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si"


export const AiSummarizer = () => {

    return (
        <div 
            className="flex flex-col space-y-10 md:space-y-5 parent"
        >
            <div className="flex justify-between opacity-100 md:container">
              <div className="flex flex-col">
                <h3 className="text-white text-xl md:text-3xl font-bold">AI Summarizer</h3>
                <Link target="_blank" href="https://article-summarizer-hazel.vercel.app/" className="flex items-center hover:underline text-white/60 text-sm md:text-md">Live Demo <RxOpenInNewWindow size={20}/></Link>
              </div>
              <div className="flex flex-col items-end justify-start">
                <p className="text-white text-md font-bold">OCT 2023 - NOV 2023</p>
                <Link target="_blank" href="https://github.com/MrJuanPabloTheCreator/Article-Summarizer" className="flex items-center space-x-1 text-white/60 text-sm md:text-md hover:underline">
                  <FaGithub size={24}/>
                  <RxOpenInNewWindow size={20}/>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start md:h-[430px] md:flex-row justify-center">      
              <img src="MacBookSum.png" className="md:hidden ml-[70px] w-[350px] sm:h-[400px] mb-5"/>
                <div className="flex justify-start w-full opacity-100 md:container-text">
                  <div className="flex flex-col justify-center md:w-[350px] space-y-10">
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
              <img src="MacBookSum.png" className="hidden md:block absolute h-[430px] pjimg2"/>
            </div>
        </div>
    )
}
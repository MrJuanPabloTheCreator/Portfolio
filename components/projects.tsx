"use client"

import { SiMysql, SiTypescript } from "react-icons/si";
import { FaAws, FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useState } from "react";
import Link from "next/link";
import { RxOpenInNewWindow } from "react-icons/rx";

export const Projects = () => {
  const { ref } = useSectionInView("About");
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <section 
      id="projects"
      ref={ref}
      className="flex flex-col items-center w-full scroll-mt-28 z-10"
    >
        <h2 className="font-extrabold text-white/40 text-center mb-5 text-5xl">
          Projects
        </h2>
        <div className="flex w-full justify-center">
          <div 
            onMouseEnter={() => setExpand(true)} 
            onMouseLeave={() => setExpand(false)}
            className="flex flex-col space-y-2 w-[800px]">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h3 className="text-white text-3xl font-bold">JP Hospital</h3>
                <a target="_blank" href="https://jp-hospital.vercel.app/" className="flex items-center hover:underline text-white/60 text-md">Live Demo <RxOpenInNewWindow size={20}/></a>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-white font-bold">JAN 2024 - PRESENT</p>
                <p className="text-white/60 text-md">Marshall, MO</p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link target="_blank" href="https://jp-hospital.vercel.app/">
                <img src="bigmac2.png" className={`h-[450px] rounded-lg duration-500 ${expand ? '-translate-x-20' : 'translate-x-0'}`}/>
              </Link>
              <div className="flex items-center">
                <div className={`flex flex-col space-y-2 bg-white/40 p-2 rounded-lg transition-opacity ease-out duration-500 ${expand ? 'opacity-100 delay-[0.5s] -translate-x-16' : 'opacity-0 w-0'}`}>
                  <div className={`bg-white rounded-lg p-2 text-blue-500 ${expand ? 'opacity-100 delay-[0.8s]' : 'opacity-0 w-0'}`}>
                    <SiMysql size={36}/>
                  </div>
                  <div className={`bg-white rounded-lg p-2 text-yellow-500 ${expand ? 'opacity-100 delay-[1.1s]' : 'opacity-0 w-0'}`}>
                    <FaAws size={36}/>
                  </div>
                  <div className={`bg-white rounded-lg p-2 text-blue-900 ${expand ? 'opacity-100 delay-[1.4s]' : 'opacity-0 w-0'}`}>
                    <SiTypescript size={36}/>
                  </div>
                  <Link target="_blank" href={'https://github.com/MrJuanPabloTheCreator/JP-Hospital'} className={`bg-white rounded-lg p-2 text-black ${expand ? 'opacity-100 delay-[1.7s]' : 'opacity-0 w-0'}`}>
                    <FaGithub size={36}/>
                  </Link>
                </div> 
              </div>  
            </div>  
          </div>  
        </div>
    </section>
  )
};
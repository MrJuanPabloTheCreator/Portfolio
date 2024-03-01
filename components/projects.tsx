"use client"

import { SiMysql, SiTypescript } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useState } from "react";
import Link from "next/link";

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
            className="flex h-[300px]">
            <Link target="_blank" href="https://jp-hospital.vercel.app/">
              <img src="jp-hospital.png" className={`h-[300px] rounded-lg duration-500 ${expand ? '-translate-x-20' : 'translate-x-0'}`}/>
            </Link>
            <div className={`flex flex-col space-y-3 bg-white/40 p-2 rounded-lg transition-opacity ease-out duration-500 ${expand ? 'opacity-100 delay-[0.5s] -translate-x-16' : 'opacity-0 w-0'}`}>
              <div className={`bg-white rounded-lg p-2 text-blue-500 ${expand ? 'opacity-100 delay-[0.8s]' : 'opacity-0 w-0'}`}>
                <SiMysql size={36}/>
              </div>
              <div className={`bg-white rounded-lg p-2 text-yellow-500 ${expand ? 'opacity-100 delay-[1.1s]' : 'opacity-0 w-0'}`}>
                <FaAws size={36}/>
              </div>
              <div className={`bg-white rounded-lg p-2 text-blue-900 ${expand ? 'opacity-100 delay-[1.4s]' : 'opacity-0 w-0'}`}>
                <SiTypescript size={36}/>
              </div>
            </div>     
          </div>  
        </div>
    </section>
  )
};
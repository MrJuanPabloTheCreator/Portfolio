"use client"

import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Landing } from "@/components/landing";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className='grid grid-cols-1 gap-32 2xl:gap-64 bg-slate-900'>
      <div className="circle-blue"/>
      <div className="circle-pink"/>
      <Landing/>
      {/* <img src="/Asset 2.svg" className="fixed h-[200px] z-50 p-5"/>  */}
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <div className="h-[100px]"/>
    </div>
  )
}

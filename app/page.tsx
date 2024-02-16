"use client"

import { About } from "@/components/about";
import { Landing } from "@/components/landing";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className='grid grid-cols-1 2xl:gap-64 bg-slate-900'>
      <div className="circle-blue"/>
      <div className="circle-pink"/>
      <Landing/>
      <About/> 
      <Skills/>
    </div>
  )
}

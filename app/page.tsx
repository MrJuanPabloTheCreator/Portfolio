"use client"

import { About } from "@/components/about";
import { Landing } from "@/components/landing";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className='app-container flex flex-col items-center'>
      <div className="circle-blue"/>
      <div className="circle-pink"/>
      <Landing/>
      <About/> 
      <Skills/>
    </div>
  )
}

"use client"

import { skills } from '../lib/data';
import Card from './card';
import { useSectionInView } from "@/lib/hooks";

export const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section 
      id="skills"
      ref={ref}
      className="flex justify-center items-center mb-28 scroll-mt-28 text-center z-10"
    >
      <div className="flex flex-col items-center z-10">
          <div className='flex w-full items-center justify-center'>
            <h2 className="font-extrabold text-white/60 w-[600px] text-center py-4 text-5xl">
              Skills & Technologies
            </h2>
          </div> 
          <div className='bg-white/40 backdrop-blur-[200px] grid grid-cols-2 lg:grid-cols-4 gap-2 p-2 h-full w-full rounded-2xl'>    
            {skills.map((item) => (
              <Card
                key={item.skill}
                img={item.img}
                text={item.skill}
                expertise={item.expertiselevel}
                time={item.time}
              />
            ))}
          </div>
      </div>
    </section>
  )
}
"use client"

import { useSectionInView } from "@/lib/hooks";

export const Experience = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section 
      id="experience"
      ref={ref}
      className="flex flex-col justify-center items-center scroll-mt-28 z-10"
    >
        <div className='flex w-full items-center justify-center'>
            <h2 className="font-extrabold text-white/60 w-[600px] text-center mb-5 text-5xl">
              Experience
            </h2>
        </div> 
        <div className="flex flex-col lg:w-[1000px] mx-5 space-y-2">
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between">
            <div className="flex flex-col">
              <h3 className="text-white text-xl md:text-3xl font-bold">Missouri Valley College</h3>
              <p className="text-white/60 text-sm">INFORMATION TECHNOLOGY INTERN</p>
            </div>
            <div className="flex flex-col md:items-end">
              <p className="text-white text-sm md:text-md font-bold">JAN 2024 - MAY 2024</p>
              <p className="text-white/60 text-sm md:text-md">Marshall, MO</p>
            </div>
          </div>
          <div className="flex justify-between"> 
            <div className="grid grid-rows-4 gap-2 px-8 py-5 max-w-[750px] text-white bg-white/10 rounded-lg">
              <div className="flex items-center">
                <p className="flex font-semibold text-lg">• Redesigned MVC's website, preserving its traditional style while contemporizing it for a visually appealing and 
modern digital presence. </p>
              </div>
              <div className="flex items-center">
                <p className="font-semibold text-lg">• Implemented server-side rendering components using the Next.js framework to enhance render time and optimize 
SEO performance. </p>
              </div>
              <div className="flex items-center">
                <p className="font-semibold text-lg">• Utilized React framework to improve interactivity and create dynamic user experiences. </p>
              </div>
              <div className="flex items-center">
                <p className="font-semibold text-lg">• Designed custom CSS animations to ensure fluid transitions and visually captivating effects. </p>
              </div>
              <div className="flex items-center">
                <p className="font-semibold text-lg">• Assisted in generating reports using Argos Reporting tool and SQL queries to extract and analyze data from vari
ous institutional databases. </p>
              </div>
            </div>
            <div className="hidden lg:block justify-center items-center p-1 rounded-lg bg-white h-[200px] w-[200px]">
              <img src="MVC.png" alt="MVC" className="object-cover"/>
            </div>
          </div>
        </div>
    </section>
  )
}
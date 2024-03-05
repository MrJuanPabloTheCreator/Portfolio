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
        <div className="flex flex-col w-[1000px] space-y-2">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="text-white text-3xl font-bold">Missouri Valley College</h3>
              <p className="text-white/60 text-sm">INFORMATION TECHNOLOGY INTERN</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-white font-bold">JAN 2024 - MAY 2024</p>
              <p className="text-white/60 text-md">Marshall, MO</p>
            </div>
          </div>
          <div className="flex justify-between"> 
            <div className="grid grid-rows-4 gap-2 px-8 py-5 max-w-[750px] text-white bg-white/10 rounded-lg">
              <div className="flex items-center">
                <p className="flex font-semibold text-lg">• Assisted in generating reports using Argos Reporting tool and SQL queries to extract and analyze data from various institutional databases.</p>
              </div>
              <div className="flex items-center">
                <p className="font-semibold text-lg">• Developed custom report templates and dashboards tailored to specific departmental needs.</p>
              </div>
              <div className="flex items-center">
                <p className="font-semibold text-lg">• Developed and presented website redesign proposals to enhance user experience and interface.</p>
              </div>
              <div className="flex items-center">
                <p className="font-semibold text-lg">• Provided support for hardware setup and maintenance throughout the college.</p>
              </div>
            </div>
            <div className="flex justify-center items-center p-1 rounded-lg bg-white h-[200px] w-[200px]">
              <img src="MVC.png" alt="MVC" className="object-cover"/>
            </div>
          </div>
        </div>
    </section>
  )
}
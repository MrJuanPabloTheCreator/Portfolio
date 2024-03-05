"use client"

import { useSectionInView } from "@/lib/hooks";
import { JpHospital } from "./projects/jp-hospital";
import { AiSummarizer } from "./projects/ai-summarizer";


export const Projects = () => {
  const { ref } = useSectionInView("About");

  return (
    <section 
      id="projects"
      ref={ref}
      className="flex flex-col items-center w-full scroll-mt-28 z-10"
    >
        <h2 className="font-extrabold text-white/40 text-center mb-5 text-5xl">
          Projects
        </h2>
        <div className="flex flex-col justify-center space-y-20 mx-4 md:w-[800px] md:mx-0">
          <JpHospital/>      
          <AiSummarizer/>
        </div>
    </section>
  )
};
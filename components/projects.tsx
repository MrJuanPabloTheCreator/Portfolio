"use client"

import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { ProjectCard } from "./projectCard";
import { useState } from "react";


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
        <div className="flex justify-center">
          <ProjectCard/>
        </div>
    </section>
  )
};
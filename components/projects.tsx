"use client"

import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { ExploreCard } from "./projectCard";
import { useState } from "react";

const exploreWorlds = [
  {
    id: 'project_1',
    imgUrl: '/jp-hospital.png',
    title: 'JP Hospital',
    description: '• Implemented precise doctor search, allowing users to select specialties and locate nearby practitioners. Utilizing geolocation data, the system promptly matches users with nearby doctors•	Designed and implemented a relational database system to efficiently manage data relationships and storage, utilizing AWS RDS for secure and scalable storage solutions.•	Developed RESTful APIs to communicate with the database, empowering users with up-to-date doctor availability information and seamless appointment booking capabilities.'
  },
  {
    id: 'project_2',
    imgUrl: '/jp-hospital.png',
    title: 'JP Hospital',
    description: 'Booking Application',
  },
  {
    id: 'project_3',
    imgUrl: '/jp-hospital.png',
    title: 'JP Hospital',
    description: 'Booking Application',
  },
  {
    id: 'project_4',
    imgUrl: '/jp-hospital.png',
    title: 'JP Hospital',
    description: 'Booking Application',
  },
];

export const Projects = () => {
  const { ref } = useSectionInView("About");

  const [active, setActive] = useState('');

  return (
    <section 
      id="projects"
      ref={ref}
      className="flex flex-col items-center w-full scroll-mt-28 z-10"
    >
        <h2 className="font-extrabold text-white/40 text-center mb-5 text-5xl">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center items-center max-w-[1400px]">
          {exploreWorlds.map((item) => (
              <ExploreCard
                key={item.id}
                {...item}
                active={active}
                handleClick={setActive}
              />
          ))}
        </div>
        {/* <div className="grid grid-cols-2 gap-4 text-white/80">
                <div className="flex flex-col ml-5 p-2 bg-white/10 backdrop-blur-[24] rounded-2xl">
                    <Image src="/jp-hospital.png" alt="jp-hospital" height={100} width={100} layout="responsive" className="rounded-t-xl"/>
                    <div className="flex flex-col w-full items-center mt-2 mb-1">
                        <h1 className="font-bold text-2xl">JP Hospital</h1>
                        <p className="text-lg">Closest Doctor Search based on specialty and/or location</p>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <div className="flex justify-center rounded-2xl py-1 bg-white/40">
                            Next JS
                        </div>
                        <div className="flex justify-center rounded-2xl py-1 bg-white/40">
                            Typescript 
                        </div>
                        <div className="flex justify-center rounded-2xl py-1 bg-white/40">
                            MySQL
                        </div>
                        <div className="flex justify-center rounded-2xl py-1 bg-white/40">
                            AWS RDS
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mr-5 p-2 bg-white/10 backdrop-blur-[24]">
                    <Image src="/jp-hospital.png" alt="jp-hospital" height={100} width={100} layout="responsive"/>
                    
                </div>
        </div> */}
    </section>
  )
};
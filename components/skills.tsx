import { skills } from "@/lib/data"
// import { useSectionInView } from "@/lib/hooks";

export const Skills = () => {
  // const { ref } = useSectionInView("Skills");
  
  return (
    <section 
      id="skills"
      // ref={ref}
      className="flex justify-center items-center scroll-mt-28 text-center z-10"
    >
      <div className="flex flex-col justify-center items-center z-10 w-full mx-5">
        <div className='flex w-full items-center justify-center'>
          <h2 className="font-extrabold text-white/60 text-center mb-5 text-5xl">
            Skills & Technologies
          </h2>
        </div> 
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 w-full md:w-[1000px]'>
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col justify-center items-center p-5 bg-white/10 rounded-lg card">
              <a className="text-white/80 text-5xl mb-2"><skill.icon /></a>
              <p className='text-white/60 font-semibold text-md mb-[-5px]'>{skill.skill}</p>
              <p className='text-white/60 text-sm'>{skill.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
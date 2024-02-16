"use client"

import { useSectionInView } from "@/lib/hooks";
import { motion, Variants } from "framer-motion"

const textVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5
      }
    }
};

export const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
      id="about"
      ref={ref}
      className="flex flex-col items-center w-full py-24 bg-white/10 backdrop-blur-[24] scroll-mt-28 z-10"
      // initial="offscreen"
      // whileInView="onscreen"
      // viewport={{ once: true, amount: 0.8 }}
      // variants={textVariants}
    >
      <motion.div 
        className='w-full'
        // variants={textVariants}
      >
        <h2 className="font-extrabold text-white/40 text-center mb-5 text-5xl">
          About me
        </h2>
      </motion.div>
      <motion.p
        className="font-medium text-2xl text-center w-[1100px] text-slate-300"
        // variants={textVariants}
      >
        23-year-old native of Santiago, Chile, currently pursuing a <span className="font-extrabold text-white">Bachelors degree in Computer Information Systems </span> 
        with a minor in Business at <span className="font-extrabold text-white">Missouri Valley College</span>, set to graduate in May 2024. I have a strong passion for technology 
        and a keen interest in web development. My skills range from confidently handling the front-end of websites to proficiently 
        working on the back-end. With a solid understanding of APIs and software development, I am committed to putting in the hard 
        work required to excel in this field. My ultimate motivation is to leverage my knowledge and skills to make a positive impact 
        on the world through innovative technological solutions.
      </motion.p>
    </motion.section>
  )
};
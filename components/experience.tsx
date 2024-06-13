"use client"

import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

export const Experience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('experience-visible');
        } else {
          entry.target.classList.remove('experience-visible');
        }
      });
    },{ rootMargin: '-50% 0px' });

    const hiddenElements = document.querySelectorAll('.experience');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center scroll-mt-28 z-10 experience"
    >
      <div className="flex w-full items-center justify-center">
        <h2 className="font-extrabold text-white/60 w-[600px] text-center mb-5 text-5xl">
          Experience
        </h2>
      </div>
      <div className="flex flex-col w-auto lg:w-[1000px] mx-5 space-y-2">
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between md:container-experience">
          <div className="flex flex-col">
            <h3 className="text-white text-xl md:text-3xl font-bold">Missouri Valley College</h3>
            <p className="text-white/60 text-sm">Information Technology Frontend Developer</p>
          </div>
          <div className="flex flex-col md:items-end">
            <p className="text-white text-md font-bold">JAN 2024 - MAY 2024</p>
            <p className="text-white/60 text-sm md:text-md">Marshall, MO</p>
          </div>
        </div>
        <div className="flex flex-col pt-5 md:arrow pb-10 md:pb-0">
          <h3 className="text-white font-bold text-2xl">What did I do?</h3>
          <p className="text-white/60">
            Redesigned the MVC&#39;s website, preserving its traditional style while contemporizing it for a visually appealing
            and modern digital presence. Implemented server-side rendering components using the Next.js framework to enhance render 
            time and optimize SEO performance. 
          </p>
        </div>
        <div className="flex md:relative flex-col md:flex-row justify-between md:justify-center items-center h-[450px] md:h-[350px]">
          <img src="/macbookpromvcold.png" className="w-[300px] md:w-auto md:h-[300px] md:absolute md:bottom-0 md:left-[-130px] md:pjimg3"/> 
          <div className="rotate-90 md:arrow md:rotate-0 text-white/40">
            <FaArrowRight size={28} />
          </div>
          <img src="/MacBook Pro MVC new.png" className="w-[300px] md:w-auto md:h-[300px] md:absolute md:bottom-0 md:left-[300px] md:pjimg4"/> 
        </div>
        <div className="flex flex-col md:flex-row pt-10 md:arrow text-white/60">
          <div className="flex flex-col w-full md:w-[500px]">
            <h3 className="text-white font-bold text-2xl">How did I do it?</h3>
            <p className="text-md">
              Utilized React framework to improve interactivity and create dynamic user experiences.
              I also designed custom CSS animations to ensure fluid transitions and visually captivating effects. 
            </p>
          </div>
          <div className="flex flex-col w-full md:w-[500px] pt-10 md:pt-0">
            <h3 className="text-white font-bold text-2xl">Extras</h3>
            <p className="text-md">
              Assisted in generating reports using Argos Reporting tool and SQL queries to extract and analyze data 
              from various institutional databases. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

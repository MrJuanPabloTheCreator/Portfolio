"use client"

import { useEffect } from "react";

// import { useSectionInView } from "@/lib/hooks";

export const About = () => {
  // const { ref } = useSectionInView("About");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about-visible');
        } else {
          entry.target.classList.remove('about-visible');
        }
      });
    },{ rootMargin: '-10% 0px' });

    const hiddenElements = document.querySelectorAll('.about-section');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="about"
      // ref={ref}
      className="flex flex-col items-center w-full py-24 bg-white/10 backdrop-blur-[24] scroll-mt-28 z-10 about-section" 
    >
      <h2 className="font-extrabold text-white text-center mb-5 text-5xl about-t">
        About me
      </h2>
      <p className="font-medium text-md md:text-2xl text-center mx-5 md:w-[1100px] text-slate-300 about-t">
        I&rsquo;m a tech enthusiast and recent college graduate driven by an 
        <span className="font-extrabold text-white"> unyielding passion </span> 
        for programming and the thrill of mastering new technologies. One of my greatest ambitions is to excel in 
        <span className="font-extrabold text-white"> system design architecture </span> 
        and push the boundaries of 
        <span className="font-extrabold text-white"> performance </span> 
        and 
        <span className="font-extrabold text-white"> efficiency </span> 
        in everything I build. Currently, I&rsquo;m delving deep into 
        <span className="font-extrabold text-white"> networking </span>, 
        <span className="font-extrabold text-white"> cloud computing</span>, and developing 
        <span className="font-extrabold text-white"> innovative solutions </span> 
        for 
        <span className="font-extrabold text-white"> data-intensive applications </span>.
        <br/><br/>
        My journey doesn&rsquo;t stop here—I aspire to pursue a master&rsquo;s degree in 
        <span className="font-extrabold text-white"> Artificial Intelligence</span>, 
        with an open mind toward a Ph.D. My excitement for software development comes from the limitless possibilities to create 
        <span className="font-extrabold text-white"> impactful</span> and 
        <span className="font-extrabold text-white"> elegant solutions </span> 
        that elevate user experiences. I approach every challenge with relentless 
        <span className="font-extrabold text-white"> persistence</span> and 
        <span className="font-extrabold text-white"> resilience</span>, while humbly acknowledging when I&rsquo;m out of my depth, and eagerly seeking wisdom from those who have ventured further. 
        I believe learning is a lifelong journey, and every experience brings valuable lessons.
      </p>
    </section>
  )
};
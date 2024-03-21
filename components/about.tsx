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
        After being born and raised in Santiago, Chile, I came to the United States pursuing a <span className="font-extrabold text-white">Bachelor&#39;s degree in Computer Information Systems </span> at <span className="font-extrabold text-white">Missouri Valley College</span>. 
        After four years, I am set to graduate in <span className="font-extrabold text-white">May 2024</span> and am looking forward to continuing my professional career as a creative tech enthusiast, leveraging my passion for innovation and technology to drive impactful projects and solutions.
        While I have a strong desire to achieve great things, I am also committed to turning those dreams into reality through strategic planning and goal-setting. Challenges bring out the best in me, and creativity and determination are the two words with which I identify myself the most. 
      </p>
    </section>
  )
};
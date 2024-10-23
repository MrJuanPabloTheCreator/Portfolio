"use client"

import Link from "next/link"
import { useEffect } from "react"
import { FaAws, FaGithub, FaReact } from "react-icons/fa"
import { RxOpenInNewWindow } from "react-icons/rx"
import { SiAmazonapigateway, SiAmazondynamodb, SiAwslambda, SiMysql, SiTailwindcss, SiTypescript } from "react-icons/si"


const ChatApp = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('parent-visible');
        } else {
          entry.target.classList.remove('parent-visible');
        }
      });
    },{ rootMargin: '-50% 0px' });

    const hiddenElements = document.querySelectorAll('.parent');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div 
      className="flex flex-col space-y-10 md:space-y-5 parent"
    >
      <div className="flex justify-between opacity-100 md:container">
        <div className="flex flex-col">
          <h3 className="text-white text-xl md:text-3xl font-bold">ChatApp</h3>
          <Link 
            target="_blank" href="https://dttkr7hfsj600.cloudfront.net/" 
            className="flex items-center hover:underline text-white/60 text-sm md:text-md"
          >
            Live Demo 
            <RxOpenInNewWindow size={20}/>
          </Link>
        </div>
        <div className="flex flex-col items-end justify-start">
          <p className="text-white text-md font-bold">
            SEP 2024 - OCT 2024
          </p>
          <Link 
            target="_blank" 
            href="https://github.com/MrJuanPabloTheCreator/webSocketChatApp" 
            className="flex items-center space-x-1 text-white/60 text-sm md:text-md hover:underline"
          >
            <FaGithub size={24}/>
            <RxOpenInNewWindow size={20}/>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start md:h-[370px] md:flex-row justify-center">      
        <img src="webSocketAppIpad.png" className="hidden md:block absolute h-[350px] pjimg1"/>
        <img src="webSocketAppIpad.png" className="md:hidden w-[300px] mb-5"/>
        <div className="flex justify-end w-full opacity-100 md:container-text">
          <div className="flex flex-col justify-center md:w-[350px] space-y-5">
            <div className="flex flex-col">
              <h1 className="text-white font-bold text-2xl">
                Real-time web chat application
              </h1>
              <p className="text-white/60 text-md">
                Built a scalable real-time chat application leveraging a serverless architecture, ensuring high availability.
                <br /><br />
                Developed a RESTful API to streamline user management processes, including secure JWT token generation and
                authentication.
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="flex flex-col items-center md:items-start md:h-[430px] md:flex-row justify-center">   
            <img src="webSocketAppIphones.png" className="hidden md:block absolute h-[400px] pjimg3"/>   
            <img src="webSocketAppIphones.png" className="md:hidden w-[300px] sm:h-[400px] mb-5"/>
            <div className="flex justify-start w-full opacity-100 md:container-text">
                <div className="flex flex-col justify-center md:w-[350px] space-y-10">
                <div className="flex flex-col">
                    <p className="text-white/60 text-md">
                    Implemented WebSocket connections via AWS API Gateway to enable real-time, bidirectional communication,
                    dynamically updating user connection IDs on connect and disconnect using Lambda functions and DynamoDB.
                    <br /><br />
                    Deployed front-end static assets to AWS S3, leveraging CloudFront as a CDN to enhance global reach and caching for improved user experience
                    </p>
                </div>
                <div className="flex items-center justify-between w-full text-white">     
                    <FaReact size={28}/>
                    <FaAws size={36}/>
                    <SiAmazonapigateway size={32}/>
                    <SiAwslambda size={32}/>
                    <SiAmazondynamodb size={32}/>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatApp;
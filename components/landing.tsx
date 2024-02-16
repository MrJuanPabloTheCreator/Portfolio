import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion"
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export const Landing = () => {
    const { ref } = useSectionInView("Home");

    return (
        <section 
            id="home"
            ref={ref}
            className="flex justify-center mt-40 z-10 scroll-mt-40"
        >   
            <div className="flex items-center justify-center">
                <motion.div 
                    className="flex sm:w-[320px] sm:h-[320px] w-[220px] h-[220px] bg-white rounded-full items-center justify-center shadow-xl"     
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                        duration: 2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <div className="sm:w-[300px] sm:h-[300px] w-[200px] h-[200px] rounded-full overflow-hidden relative">
                        <img
                            src="/Portfolio.jpg"
                            alt="hero_cover"
                            className="sm:mt-[-130px] mt-[-90px] object-contain"
                        />
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ x: -10, opacity: 0}}
                    animate={{ x: 30, opacity: 1}}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    className="mt-10 ml-[-60px] sm:m-0  flex flex-col space-y-2 sm:items-start"
                >
                    <div className="text-center sm:text-start">
                        <h1 className="text-5xl font-bold text-white sm:ml-[-15px]">Juan-Pablo</h1>
                        <h1 className="text-5xl font-bold text-white sm:ml-[-10px]">Cerda</h1>
                        <p className="text-lg font-medium text-white/50">Software Engineer | Full-Stack Developer</p>
                    </div>
                    <div
                        className="flex flex-col sm:flex-row items-center justify-center gap-2 ml-[-15px] text-lg font-medium"
                    >
                        {/* <Link
                        href="#contact"
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                        onClick={() => {''}}
                        >
                        Contact me here{" "}
                        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                        </Link> */}

                        <a
                        className="group bg-gray-900 shadow-lg text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                        href="/CV.pdf"
                        download
                        >
                            Download CV{" "}
                            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                        </a>

                        <a
                        className="bg-white p-4 text-black shadow-lg hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://www.linkedin.com/in/juanpcerda/"
                        target="_blank"
                        >
                            <BsLinkedin />
                        </a>

                        <a
                        className="bg-white p-4 text-black shadow-lg flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://github.com/MrJuanPabloTheCreator"
                        target="_blank"
                        >
                            <FaGithubSquare />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

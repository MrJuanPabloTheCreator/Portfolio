// import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion"
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

export const Landing = () => {
    // const { ref } = useSectionInView("Home");

    return (
        <section 
            id="home"
            // ref={ref}
            className="flex justify-center mt-24 sm:mt-40 z-10 scroll-mt-40"
        >   
            <div className="flex flex-col sm:flex-row items-center justify-center">
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
                            src="/Profile1.jpg"
                            alt="hero_cover"
                            className=" object-contain"
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
                        className="flex flex-row items-center justify-center gap-2 ml-[-15px] text-lg font-medium"
                    >
                        <a
                            className="group bg-white/10 shadow-lg text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
                            href="/JP_CV.pdf"
                            target="_blank"
                        >
                            Open Resume
                            <RxOpenInNewWindow className="opacity-60 group-hover:translate-y-[-3px] transition" />
                        </a>

                        <a
                            className="bg-white p-4 text-black text-xl shadow-lg flex items-center gap-2 rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer"
                            href="https://www.linkedin.com/in/juanpcerda/"
                            target="_blank"
                        >
                            <BsLinkedin />
                        </a>

                        <a
                            className="bg-white p-4 text-black text-xl shadow-lg flex items-center gap-2 rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer"
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

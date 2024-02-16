"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion"
import Link from "next/link";

export const Navbar = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <header className="z-[999] relative">
            <motion.div 
                className='fixed top-6 left-1/2 h-[3rem] w-[30rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg'
                initial={{ y: -20, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
            >
            <nav className='flex justify-center'>
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {links.map((link) => (
                        <motion.li
                        className="h-3/4 flex items-center justify-center relative"
                        key={link.hash}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                    >
                        <Link
                        className={clsx(
                            "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                            {
                            "text-gray-950 dark:text-gray-200":
                                activeSection === link.name,
                            }
                        )}
                        href={link.hash}
                        onClick={() => {
                            setActiveSection(link.name);
                            setTimeOfLastClick(Date.now());
                        }}
                        >
                        {link.name}
        
                        {link.name === activeSection && (
                            <motion.span
                            className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                            layoutId="activeSection"
                            transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                            }}
                            ></motion.span>
                        )}
                        </Link>
                    </motion.li>
                    ))}
                </ul>
            </nav>
            </motion.div>
        </header>
    )
};
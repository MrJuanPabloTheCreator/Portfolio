"use client"

import { motion } from "framer-motion"

interface SkillsProps {
  img: string;
  text: string;
  expertise: number;
  time: string;
}

const getStars = (expertise: number) => {
  const stars = [];
  for (let i = 0; i < expertise; i++) {
    stars.push(<span key={i}>★</span>);
  }
  return stars;
};

const Card: React.FC<SkillsProps> = ({
  img, 
  text,
  expertise,
  time
}) => {
  return (
    
    <motion.div whileHover={{ scale: 1.05 }} className=" bg-white/70 flex rounded-2xl space-x-4 p-2 items-center hover:bg-white/90 h-40 overflow-visible">
          <div className="h-[70px] w-[80px]">
            <img
              src={img}
              alt="photo"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-pgray font-extrabold text-2xl">{text}</p>
            <span className="text-gold font-extrabold text-xl">{getStars(expertise)}</span>
            <p className="text-plightgray font-medium text-xl">{time}</p>
          </div>
    </motion.div>
  )
}

export default Card;

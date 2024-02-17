'use client';

import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

interface ExploreCardProps{
    id: string,
    imgUrl: string, 
    title: string, 
    description: string,
    active: string, 
    handleClick: Dispatch<SetStateAction<string>>;
}

export const ExploreCard: React.FC<ExploreCardProps> = ({id, imgUrl, title, active, description, handleClick}) => {
    const fadeIn = (direction: string) => ({
        hidden: {
          x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
          y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
          opacity: 0,
        },
    });

    return (
        <motion.div
            variants={fadeIn('right')}
            className={`${active === id ? '' : ''} w-[500px] m-1`}
            onHoverStart={() => handleClick(id)}
            onHoverEnd={() => handleClick('')}
            whileHover={{ scale: 1, width: '800px'}}
        >
            <div className='bg-white/40 rounded-xl overflow-hidden'>
                <img src={imgUrl}
                alt={title}
                className={`${active === id ? '' : ''}w-full`}
                />
                {active !== id ? (
                <h3 className="text-slate-300 text-xl font-bold py-2 flex justify-center">
                    {title}
                </h3>
                ) : (
                <div className="flex flex-col items-center p-2">
                    <p className='text-white/80 font-bold'>{description}</p>
                    <div className="grid grid-cols-4 gap-2">
                        <div className="flex justify-center rounded-2xl py-1 bg-white/40">
                            Next JS
                        </div>
                        <div className="flex justify-center rounded-2xl py-1 bg-white/40">
                            Typescript 
                        </div>
                        <div className="flex justify-center rounded-2xl py-1 bg-white/40">
                            MySQL
                        </div>
                        <div className="flex justify-center rounded-2xl py-1 bg-white/40">
                            AWS RDS
                        </div>
                    </div>
                </div>
                )}
            </div>
        </motion.div>
    )
  
};
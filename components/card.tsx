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

export const Card:React.FC<SkillsProps> = ({
  img, 
  text,
  expertise,
  time
}) => {

  return ( 
    <div className="flex rounded-2xl backdrop-blur-[200px] bg-white/10 space-x-4 px-2 py-4 items-center overflow-visible">
          <div className="h-[70px] w-[80px]">
            <img
              src={img}
              alt="photo"
              className="cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-white font-extrabold text-2xl">{text}</p>
            <p className="text-white/60 font-medium text-xl">{time}</p>
            <span className="text-yellow-600 font-extrabold text-xl">{getStars(expertise)}</span>
          </div>
    </div>
  )
}

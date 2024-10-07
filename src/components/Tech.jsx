import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion"

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {

  const isMobile = window.innerWidth <= 600;
  const [hoveredTechnology, setHoveredTechnology] = useState(null);

  const handleHover = (technologyName) => {
    setHoveredTechnology(technologyName);
  };

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {!isMobile && technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name} onMouseEnter={() => handleHover(technology.name)} onMouseLeave={() => setHoveredTechnology(null)}>
          <BallCanvas icon={technology.icon} />
          {hoveredTechnology === technology.name && (
            <div className="bg-white text-black text-center" style={{fontWeight: "bold", borderRadius: "10px"}}>{technology.name}</div>
          )}
        </div>
      ))}
      {isMobile && technologies.map((technology, index) => (
        <Tilt key={index} className="w-28 h-28" onMouseEnter={() => handleHover(technology.name)} onMouseLeave={() => setHoveredTechnology(null)}>
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-full shadow-card"
        >
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary rounded-full py-5 flex justify-evenly items-center flex-col"
          >
            <img src={technology.icon} className="w-16 h-16 object-contain" />
          </div>
        </motion.div>
        {hoveredTechnology === technology.name && (
            <div className="bg-white text-black text-center mt-1" style={{fontWeight: "bold", borderRadius: "10px"}}>{technology.name}</div>
          )}
      </Tilt>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

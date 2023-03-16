import React, { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {

  const [hoveredTechnology, setHoveredTechnology] = useState(null);

  const handleHover = (technologyName) => {
    setHoveredTechnology(technologyName);
  };

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name} onMouseEnter={() => handleHover(technology.name)} onMouseLeave={() => setHoveredTechnology(null)}>
          <BallCanvas icon={technology.icon} />
          {hoveredTechnology === technology.name && (
            <div className="bg-white text-black text-center" style={{fontWeight: "bold", borderRadius: "10px"}}>{technology.name}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

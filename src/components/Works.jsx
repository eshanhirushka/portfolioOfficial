import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
  isTextHidden,
}) => {

  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px] cursor-pointer'
        onClick={() => window.open(project_link, "_blank")}>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        
          <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          {!isTextHidden && 
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          }
        </div>
        

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isTextHidden, setIsTextHidden] = useState(true);
  const [isTiltOn, setIsTiltOn] = useState(false);

  const isMobile = window.innerWidth <= 600;
  
  const toggleText = () => {
    setIsTextHidden(!isTextHidden);
  }

  const toggleTilt = () => {
    setIsTiltOn(!isTiltOn);
  }

  const handleButton = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full'>
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Welcome to the projects, Here you will find a selection of my completed and ongoing projects. Each project is clearly defined and accompanied by relevant images, providing a glimpse into my skills, creativity, and professional experience. Explore my work and see how I can bring value to your projects.
        </p>
      </div>

      <div className="flex flex-wrap mt-8 justify-between">
        <div className={`flex mt-2 gap-3 ${isMobile ? 'w-full justify-between' : ''}`}>
          <Tilt className="flex w-fit justify-between">
            <motion.div className="w-full cursor-pointer">
              <div options={{ max: 45, scale: 1, speed: 450 }} className=" rounded-full flex">
                <button className="bg-tertiary py-3 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[14px]" onClick={() => toggleText()}>
                  {isTextHidden ? 'Show Project Description' : 'Hide Project Description'}
                </button>
              </div>
            </motion.div>
          </Tilt>
          <Tilt className="flex w-fit justify-between">
            <motion.div className="w-full cursor-pointer">
              <div options={{ max: 45, scale: 1, speed: 450 }} className=" rounded-full flex">
                <button className="bg-tertiary py-3 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[14px]" onClick={() => toggleTilt()}>
                {isTiltOn ? 'Off Tilt' : 'Set Tilt'}
                </button>
              </div>
            </motion.div>
          </Tilt>
        </div>
        <div className={`flex mt-2 gap-3 ${isMobile ? 'w-full justify-between' : ''}`}>
          <Tilt className="flex w-fit justify-between">
            <motion.div className="w-full cursor-pointer">
              <div options={{ max: 45, scale: 1, speed: 450 }} className=" rounded-full flex">
              <button className="bg-tertiary py-3 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[14px]" onClick={() => handleButton("all")}>
              All
              </button>
              </div>
            </motion.div>
          </Tilt>
          <Tilt className="flex w-fit justify-between">
            <motion.div className="w-full cursor-pointer">
              <div options={{ max: 45, scale: 1, speed: 450 }} className=" rounded-full flex">
              <button className="bg-tertiary py-3 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[14px]" onClick={() => handleButton("React")}>
              React
              </button>
              </div>
            </motion.div>
          </Tilt>
          <Tilt className="flex w-fit justify-between">
            <motion.div className="w-full cursor-pointer">
              <div options={{ max: 45, scale: 1, speed: 450 }} className=" rounded-full flex">
              <button className="bg-tertiary py-3 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[14px]" onClick={() => handleButton("HTML")}>
              HTML
              </button>
              </div>
            </motion.div>
          </Tilt>
          <Tilt className="flex w-fit justify-between">
            <motion.div className="w-full cursor-pointer">
              <div options={{ max: 45, scale: 1, speed: 450 }} className=" rounded-full flex">
              <button className="bg-tertiary py-3 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[14px]" onClick={() => handleButton("Vue")}>
              Vue
              </button>
              </div>
            </motion.div>
          </Tilt> 
        </div>
      </div>

      <div className='mt-10 flex flex-wrap gap-7 justify-center'>
      {!isTiltOn && filteredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} isTextHidden={isTextHidden} />
        ))}
        {isTiltOn && filteredProjects.map((project, index) => (
          <Tilt className="flex w-fit justify-between">
            <motion.div className="w-full cursor-pointer">
              <div options={{ max: 45, scale: 1, speed: 450 }} className=" rounded-full flex">
                <ProjectCard key={`project-${index}`} index={index} {...project} isTextHidden={isTextHidden} />
              </div>
            </motion.div>
          </Tilt> 
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");

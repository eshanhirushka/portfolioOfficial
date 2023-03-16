import React from "react"
import { motion } from "framer-motion"
import Tilt from "react-tilt";

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { CVDuncan, cvDescription, socialLinks } from "../constants"
import CVDoc from "../assets/Eshan Hirushka.pdf"

const Card = ({ index, gmail, tel, address, name, image }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div>
    <div className={`text-center mb-4 ${styles.sectionSubText}`}>Contact Details</div>
    <div className="justify-center items-center" >
    <Tilt className=" w-40 h-40 m-auto">
          <motion.div
            variants={fadeIn("", "", 0.5, 1)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                src={ image }
                alt="MyPhoto"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </Tilt>
    </div>
      <div className="mt-5 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            {name}
          </p>
        </div>
      </div>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
        <a href="tel:{tel}">
        <p>
            {tel}
        </p>
        </a>
        </div>
      </div>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
        <a href="mailto:{gmail}">
        <p>
            {gmail}
        </p>
        </a>
        </div>
      </div>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
        <p>
            {address}
        </p>
        </div>
      </div>
    </div>
  </motion.div>
)

const CV = () => {
  return (
    <div className="bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>For employers</p>
          <h2 className={styles.sectionHeadText}>My CV.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {cvDescription.map((cvDescription, index) => (
          <Card key={cvDescription.name} index={index} {...cvDescription} />
        ))}

        <motion.div
          variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
          className="bg-black-200 p-10 rounded-3xl xs:w-[640px] w-full"
        >
            <div className={`text-center mb-4 ${styles.sectionSubText}`}>Attachments</div>
          <div className="flex min-[850px]:flex-row flex-col justify-center items-center">
            <img src={CVDuncan} alt="CVDuncan" className="w-[250px]" />
            <div className="w-full h-full flex flex-col items-center gap-10">
            <Tilt
            className="w-full flex justify-center">
                <motion.div
                className="w-full shadow-card cursor-pointer"
                >
                    <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className=" rounded-full flex justify-evenly items-center flex-col"
                    >
                        <a href={CVDoc} download>
                            <button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[21px]">
                                Download CV
                            </button>
                        </a>
                    </div>
                </motion.div>
            </Tilt>
                
                <div className="gap-3 w-full h-full rounded-full flex justify-center items-center cursor-pointers">
                {socialLinks.map((socialLinks, index) => (
                    <Tilt
                    key={index}
                    className="w-14 h-14">
                    <motion.div
                        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                        onClick={() => window.open(socialLinks.url, "_blank")} 
                        className="w-14 green-pink-gradient p-[1px] rounded-full shadow-card cursor-pointer"
                    >
                        <div
                        options={{ max: 45, scale: 1, speed: 450 }}
                        className="bg-tertiary rounded-full py-2 flex justify-evenly items-center flex-col"
                        >
                        <img src={socialLinks.icon} className="w-10 h-10 object-contain" />
                        </div>
                    </motion.div>
                    </Tilt>
                ))}
                </div>
            </div>
          </div>
          <div className="text-center mt-2">I'm looking forward to working with you.</div>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(CV, "cv")
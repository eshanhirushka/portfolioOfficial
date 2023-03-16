import React, { useState } from "react";
import { motion } from "framer-motion";
import Typing from "react-typing-effect";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {

  const [isTyping, setIsTyping] = useState(true);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
              Eshan
            </span>
          </h1>

          <div className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop{" "}
            {isTyping ? (
              <Typing
              speed={100}
              eraseSpeed={50}
              eraseDelay={1000}
              text={[
                "Websites",
                "User Interfaces",
                "Web Applications",
              ]}
            />
            ) : (
              "Web Applications"
            )}
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero

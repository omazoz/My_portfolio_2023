import React from "react";
import Image from "../assets/twi.png";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Oumayma<span> Mazoz </span>
            </motion.h1>
            <motion.div variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
      className="mb-6 txt-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className=" text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer...",
                  2000,
                  "UX/UI Designer..",
                  2000,
                  "SWE Student...",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
               className="font-primary text-sm tracking-[2px mb-8">
              - Welcome to my digital playground! 💓
            </motion.p>
            <motion.div variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">  <Link to="https://www.linkedin.com/in/oumayma-mazoz-2b4126228/">Contact me</Link>
              </button>
            
               <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
            </motion.div>
            <motion.div  variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
             className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 lg:item-center">
         
            </motion.div>
          </div>

          <motion.div 
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w[340px]lg:max-w-[480px]"
          >
            <img
              className="img"
              src={Image}
              style={{ marginLeft: "150px" }}
              class="animated-image"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

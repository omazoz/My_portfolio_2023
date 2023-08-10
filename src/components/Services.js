import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";


 const services = [
  {
    name: "Swe student- ALX africa ",
    description: "My software engineering study was a cosmic odyssey, where I navigated constellations of algorithms and surfed on waves of debugging challenges",
    link:'https://www.alxafrica.com/software-engineering-plus/'
  },
  {
    name: "Learning Ambassador - ALX the room",
    description: "I've proudly worn the hat of the ALX Trailblazer, igniting a path for the next generation of technopreneurs, with code as our compass.",
    link:'learn https://www.theroom.com/more'

  },
  {
    name: " Mentor-GOSS0C-2023 ",
    description: "In the world of coding, I've become the Master of Pull Quests, leading brave developers on epic journeys through lines of code and merging paths",
    link:' https://gssoc.girlscript.tech/more'

  },
  {
    name: " Fromer student-1337 SCHOOL",
    description: "I received my formal training in the mystical arts of coding from the prestigious School of Coding – a place where wands were replaced with keyboards and spells were cast with lines of code.",
    link:' https://1337.ma/en/'

  },
];
const Services = () => {
  return (
    <section className="section" id="services">
  <div className="container mx-auto">
    <div className=" flex flex-col lg:flex-row ">
      <motion.div  variants={fadeIn('right',  0.3)}
        initial='hidden'
        whileInView= {"show"}
        viewport={{ once:'false', amount:0.3}}
        className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-10 lg:mb-0">
      <h2 className="h2 text-accent mb-10">My education/Experience ...</h2>
      <h3 className="h3 max-w-[455px] mb-15"> "I embarked on an epic educational adventure..💻🔮"
              
      </h3> 
      {/* <button className="btn btn-sm"> Visit my Linkedin</button> */}
      <a href="assets/Resume.pdf" download className="btn py-2 px-4 text-base ">
    Download  my Resume
  </a>
      </motion.div>
      <motion.div variants={fadeIn('left',  0.3)}
        initial='hidden'
        whileInView= {"show"}
        viewport={{ once:'false', amount:0.3}} className="flex-1">
      <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className="border-b border-white/20 h-[146px] mb-[px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-3">
                        {name}
                      </h4>
                      <p className="font secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href={link} className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a href={link} className="text-gradient text-sm">Learn more</a>
                    </div>
                  </div>
                );
              })}
            </div>
      </motion.div>

    </div>
  </div>
    </section>
  );
};

export default Services;

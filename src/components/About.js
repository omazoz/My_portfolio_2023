import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>

      <div className="container mx-auto">
        <div
        className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div 
        variants={fadeIn('right',  0.3)}
        initial='hidden'
        whileInView= {"show"}
        viewport={{ once:'false', amount:0.3}} className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
          <motion.div      variants={fadeIn('left',  0.3)}
        initial='hidden'
        whileInView= {"show"}
        viewport={{ once:'false', amount:0.3}}className="flex-1">
            <h2 className="h2 text-accent"> About me .</h2>
            <h3 className="h3 mb-4"> I eat bugs for breakfast and turn them into features by lunchtime 
            <br/>👩‍💻.</h3>
            <p className="font-primary text-sm tracking-[3px] mb-10">
          My github is right there  show some 💓 by starring ⭐️ some of those repositories!
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] fount-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={77} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Follower on github
                </div>
              </div>
              <div>
                <div className="text-[40px] fount-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={42} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                Repositories 

                </div>
              </div>
              <div>
                <div className="text-[40px] fount-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={440} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Total commits 2023
                </div>
              </div>
            </div>
           <div className="flex gap-x-8 items-center"> 
            <button className="btn btn-lg" > <Link to="https://github.com/omazoz">View My github</Link></button>
            <a href='#' className="text-gradient btn-link"> my portfolio
            </a>
            </div> 
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;

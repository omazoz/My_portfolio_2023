import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className=" py-16 lg:section" id="contact">
      <div className=" container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div variants={fadeIn('right',  0.3)}
        initial='hidden'
        whileInView= {"show"}
        viewport={{ once:'false', amount:0.3}} className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-x1 uppercase text-accent font-medium mb-2  tracking-wide h2 text-accent mb-10 ">
                - Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
              Have a project idea ?
              <h4 className="text-x1 uppercase font-medium mb-3   h3 text-accent mb-14 ">-Let's turn it  into<br/> digital  gold!</h4>
              </h2>
             {/* <h3> "My keyboard and I are always up for an adventure "</h3> */}
            </div>
          </motion.div>
          <motion.form variants={fadeIn('left',  0.3)}
        initial='hidden'
        whileInView= {"show"}
        viewport={{ once:'false', amount:0.3}} className="flex-1 border  rounded-md p-6 items-start flex flex-col gap-y-6 pb-24">
            <input
              className="bg-transparent border-b py-3  outline-none w-full placeholder:text-white focus:border-accent transition-all "
              placeholder="Your name"
              type="text"
            />
            <input
              className="bg-transparent border-b py-3  outline-none w-full placeholder:text-white focus:border-accent transition-all "
              placeholder="Your email"
              type="text"
            />
            <textarea 
             className="bg-transparent border-b py-12  outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none  mb-12"
             placeholder="Your message"
            /> 
            <button className="btn btn-lg"> Send message</button>
             
         
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

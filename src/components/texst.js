import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    name: "Swe student ALX africa ",
    description: "HGDEJHIFKJWEOFOJEOJFWOWEJKNKSNDK",
  },
  {
    name: "Learning Ambassador ALX the room",
    description: "HGDEJHIFKJWEOFOJEOJFWOWEJKNKSNDK",
  },
  {
    name: " Mentor at  GOSS0C ",
    description: "HGDEJHIFKJWEOFOJEOJFWOWEJKNKSNDK",
  },
  {
    name: " Fromer student 1337-SCHOOL",
    description: "HGDEJHIFKJWEOFOJEOJFWOWEJKNKSNDK",
  },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <div className="flex-1 lg:bg-services lg:bg-buttom bg-no-repeat mix-blend-lighten m-12 lg:mb-0">
            <h2 className="h2 text-accent mb-10">
              My education/Experience ...
            </h2>

            {/* <h3 className="h3 max-w-[455px] mb-16">
              
            </h3> */}
            <br />
            <button className="btn btn-sm mb-17">visit my Linkedin</button>
          </div>
          <div className="flex-1">
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[8px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end"></div>
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className="text-gradient text-sm">
                      {link}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

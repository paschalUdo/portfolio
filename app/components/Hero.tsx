"use client";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div data-name="home" className="py-32 w-full bg-white" id="home">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-black ">
            Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a passionate and detail-oriented professional seeking a
            challenging position in Software Development. With strong technical
            skills in Golang and Node.js, I am dedicated to driving innovation in
            microservices architecture and modern development practices.
          </p>

          <div className="mb-5">
            <Link
              to="experience"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              My Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/ds1ll9kkv/image/upload/v1727345527/IMG_0075_nhto7v.jpg"
            alt="george"
            className="rounded-2xl mx-auto w2/3 md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import MailIcon from "../../../public/mail.svg";

const HeroSection = () => {
  return (
    <section className="h-screen grid place-items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="sm:text-center"
      >
        <h1 className="text-white mb-4 text-4xl sm:text-2xl lg:text-6xl lg:leading-normal font-extrabold px-12">
          <span>Hello, I&apos;m a </span>
          <span className="text-burntPink">Full Stack developer</span>
        </h1>
        <p className="text-white text-base sm:text-2xl  mb-6  sm:px-64 leading-9">
          Crafting modern web interfaces  for businesses and startups by
          converting their ideas into effective online solutions
        </p>
        <div>
          <Link
            href="#projects"
            className="text-white tracking-widest px-6 font-semibold inline-block py-3 w-full sm:w-fit rounded-md mr-4  bg-gradient-to-r from-purple-500 to-pinkLemonade hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
          >
            View my work
          </Link>
        </div>
        <div className="flex gap-4 py-8 justify-center">
          <Link
            className="transition duration-300 ease-in-out hover:scale-110"
            href="https://github.com/AchrafBn"
            target="_blank"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            className="transition duration-300 ease-in-out hover:scale-110"
            href="https://www.linkedin.com/in/achrafbenaomar"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link
            className="transition duration-300 ease-in-out hover:scale-110"
            href="https://www.linkedin.com/in/achrafdev/"
            target="_blank"
          >
            <Image src={MailIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

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
    <section>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-2xl leading-tight lg:text-6xl font-bold md:px-64">
            <span>Hello, I&apos;m a </span>
            <span className="text-burntPink">Full Stack developer</span>
          </h1>
          <p className="text-white text-base  sm:text-2xl  mb-6  sm:px-64 leading-9">
            I build modern websites and mobile app for businesses and startups
            by converting their design into effective online solutions
          </p>

          <a
            href="#projects"
            className="text-white text-sm md:text-base tracking-widest py-3 px-4 md:px-6 md:py-3 font-semibold inline-block    bg-gradient-to-r from-purple-500 to-pinkLemonade hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg "
          >
            View my work
          </a>

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
              href="mailto:achraf.benaomar@gmail.com"
              target="_blank"
            >
              <Image src={MailIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

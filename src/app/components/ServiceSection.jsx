"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import ResponsiveIcon from "../../../public/responsive.svg";
import CustomIcon from "../../../public/custom.svg";
import MobileIcon from "../../../public/mobile.svg";

import Image from "next/image";

const servicesData = [
  {
    id: 1,
    title: "Website Development",
    description:
      "I will develop websites tailored to your business requirements, utilizing the latest technologies to ensure a user-friendly experience.",
    src: ResponsiveIcon,
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "I focus on creating mobile apps customized to meet your business requirements, utilizing cutting-edge technologies to ensure a seamless and user-friendly experience.",
    src: MobileIcon,
  },
  {
    id: 3,
    title: "Web Customization",
    description:
      "I will enhance your website with updated design elements, additional features, and full responsiveness, using the latest tools and technologies.",
    src: CustomIcon,
  },
];
const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};
const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="my-20 md:my-44">
      <div className="text-center">
        <p className="text-pinkLemonade text-md  md:text-lg font-normal mb-2">
          What I can do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold pb-10 text-white">
          Services
        </h2>
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-6 md:gap-8">
        {servicesData.map((service, index) => (
          <motion.li
            variants={cardVariants}
            className="h-full max-w-sm border border-balticSea hover:border-pinkLemonade   bg-balticSea   rounded-lg cursor-pointer"
            key={service.id}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <a
              className="p-8 inline-block"
              href={`mailto:achraf.benaomar@gmail.com?subject=${service.title}`}
            >
              <Image src={service.src} className="mb-2" alt="Icon" />
              <h3 className="mb-2 text-lg  font-medium tracking-normal text-white">
                {service.title}
              </h3>
              <p className="text-gray-300  text-sm">{service.description}</p>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;

"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ReactIcon from "../../../public/react.svg";
import JsIcon from "../../../public/js.svg";
import Css3Icon from "../../../public/css3.svg";
import HtmlIcon from "../../../public/html5.svg";
import FirebaseIcon from "../../../public/firebase.svg";
import TailwindIcon from "../../../public/tailwind.svg";
import ExpoIcon from "../../../public/expo.svg";
import NodeIcon from "../../../public/nodejs.svg";
import GitIcon from "../../../public/git.svg";
import GraphqlIcon from "../../../public/graphql.svg";
import WpIcon from "../../../public/wp.svg";

import Image from "next/image";

const toolsData = [
  {
    id: 1,
    name: "Javascript",
    src: JsIcon,
  },
  {
    id: 2,
    name: "React",
    src: ReactIcon,
  },
  {
    id: 3,
    name: "HTML5",
    src: HtmlIcon,
  },
  {
    id: 4,
    name: "CSS3",
    src: Css3Icon,
  },
  {
    id: 5,
    name: "Tailwind",
    src: TailwindIcon,
  },
  {
    id: 6,
    name: "React native",
    src: ReactIcon,
  },
  {
    id: 7,
    name: "Expo",
    src: ExpoIcon,
  },
  {
    id: 8,
    name: "Firebase",
    src: FirebaseIcon,
  },
  {
    id: 9,
    name: "NodeJs",
    src: NodeIcon,
  },
  {
    id: 10,
    name: "Git",
    src: GitIcon,
  },
  {
    id: 11,
    name: "Graphql",
    src: GraphqlIcon,
  },
  {
    id: 12,
    name: "Wordpress",
    src: WpIcon,
  },
];

const ToolsSection = () => {
  return (
    <section id="projects" className="my-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white">
        Skills
      </h2>

      <ul className="my-12 flex gap-8 justify-center ">
        {toolsData.map((tool) => (
          <li
            key={tool.id}
            className="text-center 	transition duration-300 ease-in-out md:hover:scale-110"
          >
            <Image src={tool.src} alt="Icon" />
            <span className="sr-only sm:not-sr-only text-[#ADB7BE] ">
              {tool.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToolsSection;

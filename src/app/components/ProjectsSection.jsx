"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Maison des géante",
    description: "A Mobile app that enhances museum visits",
    image: "/images/projects/mdg.png",
    tag: ["All", "Mobile"],
    tools: ["React Native", "Expo", "Strapi"],
    gitUrl: "/",
    previewUrl:
      "https://drive.google.com/file/d/1CWLqyDSlG0bXcEgu8tfnzoZbbWylJSZE/view",
  },
  {
    id: 2,
    title: "LnFound",
    description:
      "A Mobile App Facilitating Connections Between Lost Item Owners and Finders via QR Codes",
    image: "/images/projects/lnfound.png",
    tag: ["All", "Mobile"],
    tools: ["React Native", "Expo", "Firebase"],
    gitUrl: "/",
    previewUrl: "https://lnfound.com/",
  },
  {
    id: 3,
    title: "PaMappy",
    description: "A Mobile app designed for a fertility clinic",
    image: "/images/projects/pamapy.png",
    tag: ["All", "Mobile"],
    tools: ["React Native", "Expo"],
    gitUrl: "/",
    previewUrl:
      "https://play.google.com/store/apps/details?id=net.linksoftware.pamappy",
  },
  {
    id: 4,
    title: "CIFIPE",
    description:
      "A Training School for Teachers and Managers and Directors of general education",
    image: "/images/projects/cifipe.png",
    tools: ["Wordpress"],
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://cifipe.ma",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="my-24">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white">
        Delivered Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-8">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3  gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              tools={project.tools}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

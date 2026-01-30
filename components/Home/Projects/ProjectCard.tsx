"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "./Project.data";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiVite } from "react-icons/si";
import { JSX } from "react";

type Props = {
  project: Project;
  onClick: () => void;
};

const techIcons: Record<string, JSX.Element> = {
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  React: <FaReact />,
  Node: <FaNodeJs />,
  Tailwind: <SiTailwindcss />,
  Vite: <SiVite />,
};

const ProjectCard = ({ project, onClick }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="group relative cursor-pointer rounded-3xl bg-[#141432] border border-[#1f1f3a] shadow-[0_0_6px_rgba(99,102,241,0.15)]
        hover:border-blue-500/50 hover:shadow-[0_0_12px_rgba(99,102,241,0.35)] transition-all duration-300 overflow-hidden shrink-0
        max:sm-80 md:w-md  " >
            
      {/* Image */}
      <div className="relative w-full h-60 md:h-62 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="
            object-fit object-center
            transition-transform duration-500 ease-in-out
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">{project.shortDesc}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex gap-4 text-xl text-gray-300 flex-wrap">
          {project.tech.map((tech) => (
            <span
              key={tech}
              title={tech}
              className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1 hover:text-blue-400"
            >
              {techIcons[tech]}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <button className="inline-flex items-center gap-2 px-6 py-2 my-2 rounded-full bg-linear-to-r from-blue-500 to-blue-800 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]">
          View Project →
        </button>
      </div>

      {/* GitHub Icon */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-5 right-8 text-gray-400 text-2xl p-2 rounded-full transition-all duration-300
          hover:text-blue-400 hover:scale-125 hover:shadow-lg hover:border hover:border-blue-400 bg-[#141432]/80 "
          onClick={(e) => e.stopPropagation()} 
        >
          <FaGithub className="w-8 h-8" />
        </a>
      )}
    </motion.div>
  );
};

export default ProjectCard;

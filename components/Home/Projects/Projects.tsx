"use client";

import React, { useState, useRef } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import ProjectCard from "./ProjectCard";
import { projects } from "./Project.data";
import { SiExpress, SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Projects = () => {
  const [openProject, setOpenProject] = useState<number | null>(null); // store project ID
  const carouselRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Scroll by card width when clicking arrow
  const scrollNext = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: width / 2, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: -width / 2, behavior: "smooth" });
    }
  };

  const handleOpen = (id: number) => {
    setOpenProject(id);
  };

  const handleClose = () => {
    setOpenProject(null);
  };

  const project = openProject !== null ? projects.find(p => p.id === openProject) : null;

  return (
    <section id="projects" className="bg-[#0d0d1f] py-20 px-6 md:px-16">
      <div className="max-w-full mx-auto text-white">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold pb-2 mb-4 bg-linear-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent"
         data-aos="fade-up" 
        >
          My Projects
        </h2>

        {/* Carousel */}
        <div className="relative"
         data-aos="fade-left" data-aos-delay="300" 
        >
          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            className="absolute max-sm:hidden  left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#141432] border border-[#1f1f3a] hover:border-blue-500 hover:shadow-lg transition-all z-20"
          >
            <HiArrowLeft className="w-8 h-8" />
          </button>

          {/* Project Row */}
          <div
            ref={carouselRef}
            className="flex md:gap-38 gap-6 overflow-x-auto scroll-smooth py-4"
            style={{
              scrollbarWidth: "none",       
              msOverflowStyle: "none",       
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;               // Chrome, Safari
              }
            `}</style>
          
            {projects.map((project) => (
              <div key={project.id} className="shrink-0 w-full md:w-[320px]">
                <ProjectCard project={project} onClick={() => handleOpen(project.id)} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            className="absolute max-sm:hidden right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#141432] border border-[#1f1f3a] hover:border-blue-500 hover:shadow-lg transition-all z-20"
          >
            <HiArrowRight className="w-8 h-8 " />
          </button>
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-14">
        <button
        onClick={() => router.push("/projects")}
        className="px-10 py-3 rounded-full font-semibold text-white
            bg-linear-to-r from-blue-500 to-blue-800
            transition-all duration-300
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            data-aos="fade-right" 
        >
        View All Projects →
        </button>
        </div>

        {/* Modal */}
        {project && (
          <div className="fixed inset-0 z-50 flex justify-center bg-black/70 p-4 overflow-y-auto md:pt-22 ">
            <div className="bg-[#141432] w-full max-w-4xl md:max-w-6xl rounded-3xl relative flex flex-col md:flex-row gap-8 p-4 md:p-6 mt-16 md:mt-0">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-600 hover:text-white z-50 text-2xl"
              >
                ✕
              </button>

              {/* Content & Image Wrapper */}
              <div className="flex flex-col md:flex-row w-full overflow-hidden md:items-center">
                {/* Left Side - Content */}
                <div className="flex-1 space-y-4 text-white p-2 md:p-4 overflow-y-auto max-h-[75vh]">
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{project.fullDesc}</p>
                  <ul className="space-y-2 text-gray-300">
                    {project.features.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4 text-2xl flex-wrap">
                    {project.tech.map((t) => (
                      <div key={t} title={t}>
                        {t === "MongoDB" && <SiMongodb className="text-green-500" />}
                        {t === "Express" && <SiExpress className="text-gray-300" />}
                        {t === "React" && <FaReact className="text-cyan-400" />}
                        {t === "Node" && <FaNodeJs className="text-green-400" />}
                        {t === "Tailwind" && <SiTailwindcss className="text-sky-400" />}
                        {t === "Vite" && <SiVite className="text-purple-400" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="hidden md:flex flex-1 relative h-80 md:h-78  rounded-xl overflow-hidden shrink-0">
                  <div className="w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                     className="object-fit object-center rounded-xl w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

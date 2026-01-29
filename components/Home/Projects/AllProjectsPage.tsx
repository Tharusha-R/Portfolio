"use client";

import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import ProjectCard from "@/components/Home/Projects/ProjectCard";
import { projects } from "@/components/Home/Projects/Project.data";

import { SiExpress, SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";

export default function AllProjectsPage() {
  const router = useRouter();
  const [openProject, setOpenProject] = useState<number | null>(null);

  const project =
    openProject !== null
      ? projects.find((p) => p.id === openProject)
      : null;

  // ✅ Prevent scrollbar flicker
  useEffect(() => {
    if (openProject !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openProject]);

  return (
    <section className="min-h-screen bg-[#0d0d1f] px-6 md:px-16 py-24 text-white">
      {/* Header */}
      <div className="flex items-center gap-4 mb-14">
        <button
          onClick={() =>  router.push("/#projects")}
          className="p-3 rounded-full bg-[#141432] border border-[#1f1f3a]
          hover:border-blue-500 hover:shadow-lg transition-all"
        >
          <HiArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold
          bg-linear-to-r from-blue-500 to-blue-800
          bg-clip-text text-transparent">
          All Projects
        </h1>
      </div>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <ProjectCard
              project={project}
              onClick={() => setOpenProject(project.id)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ✅ Modal (same as Home Projects) */}
      {project && (
        <div className="fixed inset-0 z-50 flex justify-center bg-black/70 p-4 overflow-y-auto md:pt-22">
          <div className="bg-[#141432] w-full max-w-4xl md:max-w-6xl rounded-3xl
            relative flex flex-col md:flex-row gap-8 p-4 md:p-6 mt-16 md:mt-0">

            {/* Close */}
            <button
              onClick={() => setOpenProject(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-white text-2xl"
            >
              ✕
            </button>

            {/* Content */}
            <div className="flex flex-col md:flex-row w-full overflow-hidden md:items-center">
              <div className="flex-1 space-y-4 p-2 md:p-4 overflow-y-auto max-h-[75vh]">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-gray-300">{project.fullDesc}</p>

                <ul className="space-y-2 text-gray-300">
                  {project.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                <div className="flex gap-4 text-2xl flex-wrap">
                  {project.tech.map((t) => (
                    <div key={t}>
                      {t === "MongoDB" && <SiMongodb className="text-green-500" />}
                      {t === "Express" && <SiExpress className="text-gray-300" />}
                      {t === "React" && <FaReact className="text-cyan-400" />}
                      {t === "Node" && <FaNodeJs className="text-green-400" />}
                      {t === "Tailwind" && (
                        <SiTailwindcss className="text-sky-400" />
                      )}
                      {t === "Vite" && <SiVite className="text-purple-400" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
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
    </section>
  );
}

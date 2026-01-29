"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaJava,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiKotlin,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
      { name: "Python", icon: <FaPython className="text-yellow-300" /> },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    ],
  },
  {
    title: "Mobile",
    items: [{ name: "Kotlin", icon: <SiKotlin className="text-purple-400" /> }],
  },
  {
    title: "Other Tools",
    items: [{ name: "Figma", icon: <FaFigma className="text-pink-400" /> },
           
    ],
   
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0d0d1f] py-24 px-6 md:px-16 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay:0.1 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-6
          bg-linear-to-r from-indigo-500  to-indigo-800  bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
         data-aos="fade-up"  
        >
          Tools and technologies I use to build modern, scalable, and
          high-performance applications.
        </p>

        {/* Skill Cards */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className=" group rounded-3xl bg-[#141432] border border-[#1f1f3a]
              p-6 hover:border-indigo-500/60 transition-all duration-300
              hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >
              <h3 className="text-xl font-semibold mb-6 group-hover:text-indigo-400 transition-colors ">
                {group.title}
              </h3>

              <div className="grid grid-cols-3 gap-6">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      rotateY: 15,
                      rotateX: -10,
                      scale: 1.15,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                  >
                    <div
                      className="text-2xl sm:text-4xl p-4 rounded-2xl bg-[#0d0d1f]
                      border border-[#1f1f3a]
                      transition-all duration-300
                      hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                    >
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

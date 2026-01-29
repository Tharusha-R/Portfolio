"use client";
import { motion } from "framer-motion";
import { roadmapData } from "./RoadmapData";
import RoadmapItem from "./RoadmapItem";

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="bg-[#0d0d1f] py-32 px-6 md:px-16 text-white"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl  md:text-5xl font-bold mb-6
          bg-linear-to-r from-indigo-400 to-blue-600 bg-clip-text text-transparent pb-2"
        >
          Learning Roadmap
        </motion.h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-28"
        data-aos="fade-up" 
        >
          From fundamentals to full-stack development and future goals.
        </p>

        {/* Timeline Line */}
        <div
          className="
            absolute
            left-4 md:left-1/2
            top-44
            bottom-0
            w-0.5
            bg-indigo-500/30
            md:-translate-x-1/2
          "
        />

        {/* Timeline */}
        <div className="space-y-28 relative">
          {roadmapData.map((item, index) => (
            <RoadmapItem key={item.year} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

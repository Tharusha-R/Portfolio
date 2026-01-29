"use client";
import { motion } from "framer-motion";
import type { RoadmapItemData } from "./RoadmapData";

interface Props {
  item: RoadmapItemData;
  index: number;
}

export default function RoadmapItem({ item, index }: Props) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex w-full">
      {/* Timeline Dot */}
      <span
        className={`
          absolute
          left-4 md:left-1/2
          top-10
          -translate-x-1/2
          w-5 h-5
          rounded-full
          z-10
          ${
            item.highlight
              ? "bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.8)]"
              : "bg-indigo-500"
          }
        `}
      />

      {/* Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -90 : 90,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.04 }}
        className={`
          relative
          w-[90%] sm:w-[80%] md:w-[42%]
          ml-12 md:ml-0
          p-6 md:p-8
          rounded-3xl
          border
          text-center
          ${
            isLeft
              ? "md:mr-auto"
              : "md:ml-auto"
          }
          ${
            item.highlight
              ? "bg-linear-to-br from-[#1a1a3a] to-[#0d0d1f] border-pink-500/40"
              : "bg-[#141432] border-[#1f1f3a]"
          }
          hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]
        `}
      >
        <h3
          className={`text-2xl font-bold mb-1 ${
            item.highlight ? "text-pink-400" : "text-indigo-400"
          }`}
        >
          {item.year}
        </h3>

        <p className="text-gray-400 mb-5">{item.title}</p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4">
          {item.skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.2, rotate: 6 }}
                className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-xl
                  bg-[#0d0d1f]
                  border border-indigo-500/30
                  hover:border-indigo-400
                  transition
                "
              >
                <Icon className="text-lg text-indigo-400" />
                <span className="text-sm">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

import type { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaPython,
  FaJava,
  FaReact,
  FaJs,
} from "react-icons/fa";
import {
  SiMysql,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiKotlin,
  SiNextdotjs,
  SiFlutter,
  SiC,
} from "react-icons/si";

export interface SkillItem {
  name: string;
  icon: IconType;
}

export interface RoadmapItemData {
  year: string;
  title: string;
  skills: SkillItem[];
  highlight?: boolean;
}

export const roadmapData: RoadmapItemData[] = [
  {
    year: "2020",
    title: "Frontend & Backend Foundations",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "SQL", icon: SiMysql },
      { name: "PHP", icon: FaPhp },
    ],
  },
  {
    year: "2021",
    title: "Backend Focus",
    skills: [{ name: "Python", icon: FaPython }],
  },
  {
    year: "2022",
    title: "Frontend Growth",
    skills: [{ name: "JavaScript", icon: FaJs }],
  },
  {
    year: "2023",
    title: "Backend & Programming Basics",
    skills: [{ name: "Java", icon: FaJava },
             { name: "C", icon: SiC },
    ],
  },
  {
    year: "2024",
    title: "Full Stack Development",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Node.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Kotlin", icon: SiKotlin },
    ],
  },
  {
    year: "2025",
    title: "🚀 Next Target",
    highlight: true,
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Flutter", icon: SiFlutter },
    ],
  },
];

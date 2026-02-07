// components/Home/Projects/projects.data.ts

export type Project = {
  id: number;
  image: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  tech: string[];
  github?: string; 
};

export const projects: Project[] = [
  {
    id: 1,
    image: "/images/Spark1.jpg",
    title: "SPARK",
    shortDesc:
      "A modern MERN-based volunteer and event management platform.",
    fullDesc:
      "SPARK is a modern MERN stack web application designed as a volunteer, volunteer organization, and volunteer event management system. It includes user authentication, role-based access control, and a responsive design to ensure accessibility across devices. This project was developed as a 3rd-year group project for the BSc in Software Engineering degree at SLIIT.",
    features: [
      "Event creation, management, and participation",
      "User authentication & volunteer management",
      "Role-based access control",
      "Group chat for volunteers and organizers",
      "Responsive UI with Tailwind CSS",
    ],
    tech: ["MongoDB", "Express", "React", "Node", "Tailwind", "Vite"],
     github: "https://github.com/Tharusha-R/Spark", 
  },
  {
    id: 2,
    image: "/images/CareLink.jpg", 
    title: "Care Link LK",
    shortDesc:
      "A JavaScript-based web app for clinics, caregivers, and patients in Sri Lanka.",
    fullDesc:
      "Care Link LK is a collaborative group project that allows clinics, caregivers, and patients to manage healthcare tasks efficiently. It supports appointment scheduling, secure patient records, role-based access for different user types, notifications, and messaging between caregivers and patients. Built with the MERN stack and Tailwind CSS, it ensures a responsive and user-friendly interface.",
    features: [
      "Role-Based Access Control for patients, caregivers, and admins",
      "Appointment Scheduling with reminders",
      "Secure Patient Records management",
      "Email & SMS Notifications",
      "QR code login and patient history retrieval",
    ],
    tech: ["MongoDB", "Express", "React", "Node", "Tailwind", "Vite"],
    github: "https://github.com/Tharusha-R/Care-Link-LK", 
  },
  {
    id: 3,
    image: "/images/Any-Hire.jpg", 
    title: "AnyHire.lk",
    shortDesc:
      "A full-stack job platform connecting part-time seekers with local customers.",
    fullDesc:
      "AnyHire.lk is a MERN stack web application developed to connect part-time job seekers with employers based on location and job categories. Job posters can create and manage job postings, while seekers can search and apply for suitable positions. The platform includes user authentication, role-based access, notifications, and a responsive design to make job matching easy and efficient.",
    features: [
      "Job posting, management, and search functionality",
      "Role-based access for job seekers and employers",
      "Location-based job matching",
      "Notifications for job applications and updates",
      "Responsive UI built with Tailwind CSS",
    ],
    tech: ["MongoDB", "Express", "React", "Node", "Tailwind", "Vite"],
    github: "https://github.com/Tharusha-R/AnyHire", 
  },


  {
  id: 4,
  image: "/images/RuralLink.png",
  title: "RuralLink",
  shortDesc:
    "A MERN-based platform improving last-mile delivery and financial tracking for rural entrepreneurs.",
  fullDesc:
    "RuralLink is a full-stack MERN web application developed as a group project to support rural entrepreneurs by simplifying last-mile delivery and business management. The system helps producers manage orders, track income and expenses, analyze financial trends, and coordinate deliveries more efficiently. With data visualization, multi-currency support, and secure cloud synchronization, RuralLink enables small-scale rural businesses to make data-driven decisions and reduce logistical challenges.",
  features: [
    "Order and delivery coordination for rural businesses",
    "Income and expense tracking with progress visualization",
    "Interactive analytics dashboard with financial insights",
    "Multi-currency and localization support",
    "Exportable financial reports (PDF & Excel)",
    "Secure cloud backup and cross-device synchronization",
  ],
  tech: ["MongoDB", "Express", "React", "Node", "Tailwind", "Vite"],
  github: "https://github.com/Tharusha-R/Rural-Link" 
}

];

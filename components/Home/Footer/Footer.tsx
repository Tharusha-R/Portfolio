"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d1f] border-t border-[#1f1f3a]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-16 py-8 text-center"
      >
        <p className="text-gray-400 text-sm">
          © {currentYear}{" "}
          <span className="text-indigo-400 font-medium">
            Tharusha Rukshan
          </span>
          . All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

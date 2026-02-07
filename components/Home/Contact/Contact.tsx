"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("✅ Message sent successfully!");
        form.reset();
      } else {
        toast.error("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  // Social links with your URLs
  const socialLinks = [
    { Icon: FaGithub, url: "https://github.com/Tharusha-R" },
    { Icon: FaFacebookF, url: "https://www.facebook.com/share/184MgrQHHP/?mibextid=wwXIfr" },
    { Icon: FaInstagram, url: "https://instagram.com/t._rukshan" },
    { Icon: FaLinkedinIn, url: "http://www.linkedin.com/in/tharusha-rukshan-5a4831371" },
  ];

  return (
    <section id="contact" className="bg-[#0d0d1f] py-32 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-md">
            Have a project idea, collaboration, or just want to say hi? Feel free to reach out. I’m always open to discussing new ideas.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="p-3 rounded-xl bg-[#141432] border border-blue-500/30 text-blue-400">
                <FaPhoneAlt />
              </span>
              <span className="text-gray-300">+94 76 661 1858</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="p-3 rounded-xl bg-[#141432] border border-blue-500/30 text-blue-400">
                <FaEnvelope />
              </span>
              <span className="text-gray-300">tharusharukshan9@gmail.com</span>
            </div>
          </div>

          <div className="flex gap-5 pt-4">
            {socialLinks.map(({ Icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, rotate: 8 }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#141432]
                  border border-[#1f1f3a] text-gray-300 hover:text-blue-400
                  hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition cursor-pointer"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-[#141432] border border-[#1f1f3a] p-8 md:p-10 shadow-[0_0_12px_rgba(99,102,241,0.15)] hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] transition"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <input name="name" required placeholder="Your Name" className="w-full px-5 py-3 rounded-xl bg-[#0d0d1f] border border-[#1f1f3a]" />
            <input name="email" type="email" required placeholder="Email Address" className="w-full px-5 py-3 rounded-xl bg-[#0d0d1f] border border-[#1f1f3a]" />
            <input name="phone" placeholder="Mobile Number" className="w-full px-5 py-3 rounded-xl bg-[#0d0d1f] border border-[#1f1f3a]" />
            <textarea name="message" required rows={4} placeholder="Your Message" className="w-full px-5 py-3 rounded-xl bg-[#0d0d1f] border border-[#1f1f3a]" />
            <motion.button type="submit" whileHover={{ scale: 1.05 }} className="w-full py-3 rounded-full font-medium text-white bg-linear-to-r from-blue-500 to-blue-800 hover:shadow-[0_0_25px_rgba(99,102,241,0.7)] transition">
              {loading ? "Sending..." : "Send Message 🚀"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

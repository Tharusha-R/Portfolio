import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#0d0d1f] py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-white">

        {/* Title */}
        <h2
          data-aos="fade-up" 
          className="
            text-center
            text-3xl sm:text-4xl md:text-5xl
            font-bold
            mb-12
            bg-linear-to-r from-blue-500 to-blue-800
            bg-clip-text text-transparent
          "
        >
          About Me
        </h2>

        {/* Content Card */}
        <div
          data-aos="zoom-in-up" data-aos-delay="200"
          className="
            p-8 md:p-10
            rounded-3xl
            bg-[#141432]
            border border-[#1f1f3a]
            transition-all duration-300
            hover:border-blue-500/50
            hover:shadow-[0_15px_50px_rgba(99,102,241,0.25)]
          "
        >
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Hi, I’m{" "}
            <span className="text-blue-400 font-semibold">
              Tharusha Rukshan
            </span>
            , an undergraduate{" "}
            <span className="text-blue-400 font-medium">BSc IT</span> student
            specializing in{" "}
            <span className="text-blue-400 font-medium">Software Engineering</span> 
            at SLIIT, Sri Lanka. I’m passionate about creating efficient,
            scalable, and visually engaging applications as a{" "}
            <span className="text-blue-400 font-semibold">Full Stack Developer</span>.
          </p>

          <p className="text-gray-300 leading-relaxed mt-4 text-base md:text-lg">
            I work with the{" "}
            <span className="text-blue-400 font-medium">MERN stack</span>,{" "}
            <span className="text-blue-400 font-medium">JavaScript</span>,{" "}
            <span className="text-blue-400 font-medium">TailwindCSS</span>,{" "}
            <span className="text-blue-400 font-medium">PHP</span>,{" "}
            <span className="text-blue-400 font-medium">Python</span>,{" "}
            <span className="text-blue-400 font-medium">MySQL</span>,{" "}
            <span className="text-blue-400 font-medium">Oracle</span>,{" "}
            <span className="text-blue-400 font-medium">Kotlin</span>, and{" "}
            <span className="text-blue-400 font-medium">Java</span>, and I enjoy designing clean and user-friendly interfaces using{" "}
            <span className="text-blue-400 font-medium">Figma</span>.
          </p>

          <p className="text-gray-300 leading-relaxed mt-4 text-base md:text-lg">
            I love learning new technologies, collaborating on challenging
            projects, and building solutions that make a difference. My goal is
            to continuously grow as a tech professional while delivering
            high-quality software that combines performance with great user
            experience.
          </p>

          {/* Explore Projects Button */}
          <div className="mt-10 flex justify-center md:justify-start">
            <a
              href="#projects"
              className="
                px-8 py-3 rounded-full
                bg-linear-to-r from-blue-500 to-blue-800
                hover:from-blue-600 hover:to-blue-900
                text-white font-medium
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]
                flex items-center gap-2
              "
            >
              Explore My Projects
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

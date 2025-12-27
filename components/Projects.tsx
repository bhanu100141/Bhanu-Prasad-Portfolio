"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

export default function Projects() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory, secure payments, and admin dashboard. Features include product management, order tracking, and analytics.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Real-time social media analytics platform with interactive charts, user engagement metrics, and automated reporting features.",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Task Manager",
      description:
        "Smart task management app with AI-powered suggestions, priority sorting, and team collaboration features with real-time updates.",
      technologies: ["Next.js", "Express", "Socket.io", "OpenAI"],
      github: "#",
      demo: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className={`py-12 md:py-20 relative overflow-hidden ml-0 lg:ml-20 px-4 md:px-0 transition-colors ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2
          variants={cardVariants}
          className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          Featured Projects
        </motion.h2>

        {/* Mobile - Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto overflow-y-visible pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-4 min-w-min">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`flex-shrink-0 w-[92vw] max-w-md min-h-[420px] rounded-2xl overflow-hidden group relative shadow-xl ${
                  theme === "dark"
                    ? "bg-white/5 backdrop-blur-sm border border-white/10"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="p-8 relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Project number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2, type: "spring" }}
                      className={`text-6xl font-bold mb-4 ${
                        theme === "dark" ? "text-white/10" : "text-gray-200"
                      }`}
                    >
                      0{index + 1}
                    </motion.div>

                    <h3 className={`text-2xl font-semibold mb-4 transition-all ${
                      theme === "dark"
                        ? "text-white group-hover:text-white/90"
                        : "text-black group-hover:text-gray-800"
                    }`}>
                      {project.title}
                    </h3>

                    <p className={`text-base mb-6 leading-relaxed ${
                      theme === "dark" ? "text-white/70" : "text-gray-700"
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={
                            isInView
                              ? { scale: 1, rotate: 0 }
                              : { scale: 0, rotate: -180 }
                          }
                          transition={{
                            delay: index * 0.2 + techIndex * 0.1,
                            type: "spring",
                          }}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            theme === "dark"
                              ? "bg-white/10 border border-white/20 text-white"
                              : "bg-gray-200 border border-gray-300 text-black"
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-6">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 transition-colors group/link font-medium ${
                          theme === "dark"
                            ? "text-white/70 hover:text-white"
                            : "text-gray-700 hover:text-black"
                        }`}
                      >
                        <FaGithub className="text-xl" />
                        <span className="group-hover/link:underline">Code</span>
                      </motion.a>

                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 transition-colors group/link font-medium ${
                          theme === "dark"
                            ? "text-white/70 hover:text-white"
                            : "text-gray-700 hover:text-black"
                        }`}
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span className="group-hover/link:underline">Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop - Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`rounded-2xl overflow-hidden group relative shadow-xl hover:shadow-2xl transition-all ${
                theme === "dark"
                  ? "bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10"
                  : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <div className="p-6 md:p-8 relative z-10">
                {/* Project number */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                  className={`text-6xl font-bold mb-4 ${
                    theme === "dark" ? "text-white/10" : "text-gray-200"
                  }`}
                >
                  0{index + 1}
                </motion.div>

                <h3 className={`text-2xl md:text-3xl font-semibold mb-4 transition-all ${
                  theme === "dark"
                    ? "text-white group-hover:text-white/90"
                    : "text-black group-hover:text-gray-800"
                }`}>
                  {project.title}
                </h3>

                <p className={`mb-6 leading-relaxed ${
                  theme === "dark" ? "text-white/70" : "text-gray-700"
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={
                        isInView
                          ? { scale: 1, rotate: 0 }
                          : { scale: 0, rotate: -180 }
                      }
                      transition={{
                        delay: index * 0.2 + techIndex * 0.1,
                        type: "spring",
                      }}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        theme === "dark"
                          ? "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                          : "bg-gray-200 border border-gray-300 text-black hover:bg-gray-300"
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 transition-colors group/link font-medium ${
                      theme === "dark"
                        ? "text-white/70 hover:text-white"
                        : "text-gray-700 hover:text-black"
                    }`}
                  >
                    <FaGithub className="text-xl" />
                    <span className="group-hover/link:underline">Code</span>
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 transition-colors group/link font-medium ${
                      theme === "dark"
                        ? "text-white/70 hover:text-white"
                        : "text-gray-700 hover:text-black"
                    }`}
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span className="group-hover/link:underline">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/bhanu100141"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-block px-8 py-4 rounded-lg font-medium transition-colors shadow-md ${
              theme === "dark"
                ? "bg-white text-black hover:bg-white/90"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            View All Projects →
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

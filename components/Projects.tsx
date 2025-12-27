"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
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
    <section id="projects" className="py-20 relative overflow-hidden ml-20 bg-black">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2
          variants={cardVariants}
          className="text-5xl md:text-6xl font-bold text-center text-white mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-2xl overflow-hidden group relative border border-white/10 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="p-6 md:p-8 relative z-10">
                {/* Project number */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                  className="text-6xl font-bold text-white/10 mb-4"
                >
                  0{index + 1}
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 group-hover:text-white/90 transition-all">
                  {project.title}
                </h3>

                <p className="text-white/70 mb-6 leading-relaxed">
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
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white font-medium hover:bg-white/20 transition-colors"
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
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group/link font-medium"
                  >
                    <FaGithub className="text-xl" />
                    <span className="group-hover/link:underline">Code</span>
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group/link font-medium"
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
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors shadow-md"
          >
            View All Projects →
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

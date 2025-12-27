"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaPython,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaCode
} from "react-icons/fa";
import { SiExpress, SiSqlite } from "react-icons/si";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Node.js", icon: FaNode, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "SQLite", icon: SiSqlite, color: "#003B57" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Flexbox", icon: FaCode, color: "#1572B6" },
    { name: "OOPs", icon: FaCode, color: "#3776AB" },
  ];

  // Duplicate skills array for seamless infinite loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-20 relative overflow-hidden ml-20 bg-black">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center text-white mb-16"
        >
          Skills & Expertise
        </motion.h2>

        {/* Infinite Scrolling Skills Slider */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Scrolling container */}
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1920], // Adjust based on total width
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    whileHover={{ scale: 1.1, y: -10 }}
                    className="flex-shrink-0 w-40 h-40 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all group"
                  >
                    <motion.div
                      className="text-6xl"
                      style={{ color: skill.color }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon />
                    </motion.div>
                    <p className="text-white font-medium text-center px-2">
                      {skill.name}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Additional Skills Categories Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
            <p className="text-white/60 leading-relaxed">
              Crafting beautiful, responsive user interfaces with modern frameworks and best practices.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
            <p className="text-white/60 leading-relaxed">
              Building robust server-side applications with efficient data handling and API design.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4">Database</h3>
            <p className="text-white/60 leading-relaxed">
              Managing and optimizing data storage with relational database systems.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

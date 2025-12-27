"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGraduationCap, FaBook, FaSchool } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

export default function About() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"about" | "education">("about");

  const education = [
    {
      degree: "BSC (Computer Science)",
      institution: "Sri Sai Degree College, Kadapa",
      period: "2019-2022",
      cgpa: "9.27",
      icon: FaGraduationCap,
    },
    {
      degree: "Sr. Secondary Education (MPC)",
      institution: "Sri Venkateswara Junior College, Kadapa",
      period: "2017-2019",
      cgpa: "9.09",
      icon: FaBook,
    },
    {
      degree: "Secondary Education (SSC)",
      institution: "Z P High School, Kadapa",
      period: "2014-2017",
      cgpa: "8.00",
      icon: FaSchool,
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="about" className={`py-12 md:py-20 relative overflow-hidden ml-0 lg:ml-20 px-4 md:px-0 transition-colors ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          About Me
        </motion.h2>

        {/* Mobile Tabs */}
        <div className="lg:hidden flex gap-4 mb-8 justify-center">
          <button
            onClick={() => setActiveTab("about")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "about"
                ? theme === "dark"
                  ? "bg-white text-black"
                  : "bg-black text-white"
                : theme === "dark"
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "education"
                ? theme === "dark"
                  ? "bg-white text-black"
                  : "bg-black text-white"
                : theme === "dark"
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            Education
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <motion.div
            variants={itemVariants}
            className={`p-6 md:p-8 rounded-2xl transition-all shadow-xl ${
              activeTab !== "about" ? "hidden lg:block" : ""
            } ${
              theme === "dark"
                ? "bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10"
                : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`h-1 mb-8 rounded-full ${
                theme === "dark"
                  ? "bg-gradient-to-r from-white via-gray-400 to-white"
                  : "bg-gradient-to-r from-black via-gray-600 to-black"
              }`}
            />

            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              Frontend Developer
            </h3>

            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg leading-relaxed mb-4 ${
                theme === "dark" ? "text-white/70" : "text-gray-700"
              }`}
            >
              I'm a passionate{" "}
              <span className="font-semibold text-yellow-400">Frontend Developer</span>{" "}
              with expertise in building modern, responsive web applications. I specialize
              in creating interactive user interfaces using cutting-edge technologies.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg leading-relaxed mb-4 ${
                theme === "dark" ? "text-white/70" : "text-gray-700"
              }`}
            >
              With a strong foundation in{" "}
              <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>HTML, CSS, JavaScript</span>,
              and modern frameworks like{" "}
              <span className={`font-semibold ${theme === "dark" ? "text-white/90" : "text-gray-800"}`}>React.js</span>,
              I bring ideas to life through clean, efficient code and beautiful design.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg leading-relaxed ${
                theme === "dark" ? "text-white/70" : "text-gray-700"
              }`}
            >
              I'm always eager to learn new technologies and collaborate on exciting
              projects that make a difference.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {["Problem Solver", "Quick Learner", "Team Player", "Detail-Oriented"].map(
                (trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      theme === "dark"
                        ? "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                        : "bg-gray-200 border border-gray-300 text-black hover:bg-gray-300"
                    }`}
                  >
                    {trait}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={itemVariants}
            className={`space-y-4 ${activeTab !== "education" ? "hidden lg:block" : ""}`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>Education</h3>

            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`p-5 rounded-xl relative overflow-hidden group shadow-xl transition-all ${
                    theme === "dark"
                      ? "bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10"
                      : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {/* Icon */}
                  <motion.div
                    className={`absolute top-5 right-5 text-4xl opacity-50 group-hover:opacity-70 transition-opacity ${
                      theme === "dark" ? "text-white/20" : "text-gray-300"
                    }`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon />
                  </motion.div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className={`text-lg font-semibold transition-all ${
                        theme === "dark" ? "text-white group-hover:text-white/90" : "text-black group-hover:text-gray-800"
                      }`}>
                        {edu.degree}
                      </h4>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        theme === "dark"
                          ? "bg-white/10 text-white border border-white/20"
                          : "bg-gray-200 text-black border border-gray-300"
                      }`}>
                        CGPA: {edu.cgpa}
                      </span>
                    </div>

                    <p className={`text-sm mb-1.5 ${theme === "dark" ? "text-white/70" : "text-gray-700"}`}>{edu.institution}</p>
                    <p className={`text-xs ${theme === "dark" ? "text-white/50" : "text-gray-600"}`}>{edu.period}</p>
                  </div>

                  {/* Animated bottom border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-white to-gray-400"
                        : "bg-gradient-to-r from-black to-gray-600"
                    }`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaBook, FaSchool } from "react-icons/fa";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="about" className="py-20 relative overflow-hidden ml-20 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-center text-black mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 hover:bg-gray-100 p-8 md:p-12 rounded-2xl border border-gray-200 transition-all shadow-md hover:shadow-xl"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-black via-gray-600 to-black mb-8 rounded-full"
            />

            <h3 className="text-3xl font-bold text-black mb-6">
              Frontend Developer
            </h3>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
            >
              I'm a passionate{" "}
              <span className="text-black font-semibold">Frontend Developer</span>{" "}
              with expertise in building modern, responsive web applications. I specialize
              in creating interactive user interfaces using cutting-edge technologies.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
            >
              With a strong foundation in{" "}
              <span className="text-black font-semibold">HTML, CSS, JavaScript</span>,
              and modern frameworks like{" "}
              <span className="text-gray-800 font-semibold">React.js</span>,
              I bring ideas to life through clean, efficient code and beautiful design.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
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
                    className="px-4 py-2 bg-black/10 border border-black/20 rounded-full text-gray-800 text-sm font-medium hover:bg-black/20 transition-colors"
                  >
                    {trait}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-bold text-black mb-8">Education</h3>

            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-gray-50 hover:bg-gray-100 p-6 rounded-xl relative overflow-hidden group border border-gray-200 shadow-md hover:shadow-xl transition-all"
                >
                  {/* Icon */}
                  <motion.div
                    className="absolute top-6 right-6 text-5xl text-gray-300 opacity-50 group-hover:opacity-70 transition-opacity"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon />
                  </motion.div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-semibold text-black group-hover:text-gray-800 transition-all">
                        {edu.degree}
                      </h4>
                      <span className="px-3 py-1 bg-black/10 text-gray-700 rounded-full text-sm font-medium border border-black/20">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-2">{edu.institution}</p>
                    <p className="text-gray-600 text-sm">{edu.period}</p>
                  </div>

                  {/* Animated bottom border */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-black to-gray-600"
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

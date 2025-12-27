"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-center gradient-text glow-text mb-12"
        >
          About Me
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto glass glass-hover p-8 md:p-12 rounded-2xl"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mb-8 rounded-full"
          />

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
          >
            I'm a passionate{" "}
            <span className="gradient-text font-semibold">Full Stack Developer</span>{" "}
            with expertise in building modern web applications. I love creating
            elegant solutions to complex problems and continuously learning new
            technologies to stay at the forefront of web development.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
          >
            With a strong foundation in both{" "}
            <span className="text-purple-400 font-semibold">frontend</span> and{" "}
            <span className="text-pink-400 font-semibold">backend</span> development,
            I specialize in creating responsive, user-friendly applications that
            deliver exceptional user experiences. My approach combines technical
            expertise with creative problem-solving.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            When I'm not coding, I enjoy exploring new technologies, contributing
            to open-source projects, and sharing knowledge with the developer community.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["Problem Solver", "Quick Learner", "Team Player", "Creative Thinker"].map(
              (trait, index) => (
                <motion.span
                  key={trait}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-gray-300 text-sm font-medium"
                >
                  {trait}
                </motion.span>
              )
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

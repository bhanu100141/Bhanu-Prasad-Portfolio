"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Python", "Express", "Node.js"],
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["SQLite"],
    },
    {
      title: "Other Skills",
      icon: "🛠️",
      skills: ["Flexbox", "Git", "OOPs", "Responsive Design"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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
    <section id="skills" className="py-20 relative overflow-hidden ml-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl"
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
          variants={cardVariants}
          className="text-5xl md:text-6xl font-bold text-center gradient-text glow-text mb-16"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
              className="glass glass-hover p-6 md:p-8 rounded-2xl relative group"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-gray-400/0 group-hover:from-white/20 group-hover:to-gray-400/20 transition-all duration-300" />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    delay: categoryIndex * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-5xl mb-4"
                >
                  {category.icon}
                </motion.div>

                <h3 className="text-2xl font-semibold gradient-text mb-6">
                  {category.title}
                </h3>

                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      className="text-gray-300 flex items-center group/item"
                    >
                      <motion.span
                        className="w-2 h-2 bg-gradient-to-r from-white to-gray-400 rounded-full mr-3"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="group-hover/item:text-white transition-colors">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

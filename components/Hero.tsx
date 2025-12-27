"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden ml-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full blur-2xl opacity-75 animate-pulse" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden glass p-3 glow">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-purple-400/30">
                  <Image
                    src="/profile-placeholder.svg"
                    alt="Bhanuprasad Vepakayala"
                    width={400}
                    height={400}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
                HI THERE! I'M
              </h2>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold"
            >
              <span className="gradient-text glow-text">BHANUPRASAD</span>
              <br />
              <span className="text-white">VEPAKAYALA</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300"
            >
              A <span className="gradient-text font-semibold">Frontend Developer</span>{" "}
              passionate about creating interactive applications and experiences on the web.
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-6 justify-center lg:justify-start flex-wrap pt-6"
            >
              {/* Resume Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-medium text-lg shadow-lg"
              >
                Resumé
              </motion.a>

              {/* Social Icons */}
              <div className="flex gap-4 items-center">
                <motion.a
                  href="https://www.linkedin.com/in/bhanu-prasad-117152267"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center text-2xl hover:bg-purple-500/20 transition-colors"
                  title="LinkedIn"
                >
                  💼
                </motion.a>
                <motion.a
                  href="https://github.com/bhanu100141"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center text-2xl hover:bg-purple-500/20 transition-colors"
                  title="GitHub"
                >
                  🐙
                </motion.a>
                <motion.a
                  href="mailto:bhanu100141@gmail.com"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center text-2xl hover:bg-purple-500/20 transition-colors"
                  title="Email"
                >
                  📧
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-2 pt-4 text-gray-400"
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span>📧</span>
                <span>bhanu100141@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span>📱</span>
                <span>+91 9392609951</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

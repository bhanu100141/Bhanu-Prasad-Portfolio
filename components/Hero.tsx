"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden ml-20 bg-white"
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl"
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
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-200 shadow-2xl">
                <Image
                  src="/profile-placeholder.svg"
                  alt="Bhanuprasad Vepakayala"
                  width={400}
                  height={400}
                  className="rounded-full object-cover filter grayscale"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
                HI THERE! I'M
              </h2>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold"
            >
              <span className="text-black">BHANUPRASAD</span>
              <br />
              <span className="text-gray-800">VEPAKAYALA</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-700"
            >
              A <span className="text-black font-semibold">Frontend Developer</span>{" "}
              passionate about creating interactive applications and experiences on the web.
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-6 justify-center lg:justify-start flex-wrap pt-6"
            >
              {/* Resume Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-black text-white rounded-full font-medium text-lg shadow-lg hover:bg-gray-900 transition-colors"
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
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl hover:bg-gray-200 transition-colors shadow-md"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-black" />
                </motion.a>
                <motion.a
                  href="https://github.com/bhanu100141"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl hover:bg-gray-200 transition-colors shadow-md"
                  title="GitHub"
                >
                  <FaGithub className="text-black" />
                </motion.a>
                <motion.a
                  href="mailto:bhanu100141@gmail.com"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl hover:bg-gray-200 transition-colors shadow-md"
                  title="Email"
                >
                  <FaEnvelope className="text-black" />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-2 pt-4 text-gray-600"
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <FaEnvelope className="text-lg" />
                <span>bhanu100141@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <FaPhone className="text-lg" />
                <span>+91 9392609951</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/bhanu100141", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/bhanu-prasad-vepakayala-117152267", label: "LinkedIn" },
  ];

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center relative overflow-hidden transition-colors ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      {/* Animated background particles */}
      {mounted && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                theme === "dark" ? "bg-white/20" : "bg-black/20"
              }`}
              initial={{
                x: Math.random() * 1920,
                y: Math.random() * 1080,
              }}
              animate={{
                y: [null, Math.random() * 1080],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Social Sidebar - Desktop (left side) */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-6"
      >
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`text-xl transition-colors ${
                theme === "dark"
                  ? "text-white/60 hover:text-white"
                  : "text-black/60 hover:text-black"
              }`}
              title={social.label}
            >
              <Icon />
            </motion.a>
          );
        })}

        {/* "Follow Me" text - Desktop */}
        <div className="mt-8">
          <p
            className={`text-sm tracking-wider ${
              theme === "dark" ? "text-white/60" : "text-black/60"
            }`}
            style={{ writingMode: "vertical-rl" }}
          >
            Follow Me
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 py-12 md:py-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left side - Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-5xl md:text-7xl font-bold leading-tight ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            I'm{" "}
            <span
              className="inline-block text-yellow-400"
              style={{
                WebkitTextStroke: theme === "dark" ? "2px white" : "2px black",
                paintOrder: "stroke fill",
              }}
            >
              {"Bhanuprasad".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    delay: index * 0.15,
                    ease: "easeInOut",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>{" "}
            Vepakayala
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className={`text-3xl md:text-4xl ${
              theme === "dark" ? "text-white/80" : "text-black/80"
            }`}
          >
            I love{" "}
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={theme === "dark" ? "text-white" : "text-black"}
            >
              coding
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className={`text-lg max-w-lg leading-relaxed ${
              theme === "dark" ? "text-white/60" : "text-black/60"
            }`}
          >
            A passionate <span className="text-yellow-400 font-semibold">Frontend Developer</span> creating innovative web solutions with modern technologies.
            Building beautiful, responsive applications that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex gap-4 pt-6"
          >
            <motion.a
              href="/Bhanuprasad_Vepakayala_Resume.pdf"
              download="Bhanuprasad_Vepakayala_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-none font-medium transition-colors ${
                theme === "dark"
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 border-2 rounded-none font-medium transition-all ${
                theme === "dark"
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side - Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full max-w-lg mx-auto mt-12">
            {/* Glowing effect */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute inset-0 blur-3xl ${
                theme === "dark"
                  ? "bg-gradient-to-r from-white/10 to-transparent"
                  : "bg-gradient-to-r from-black/10 to-transparent"
              }`}
            />

            {/* Flip Card Container */}
            <div className="relative w-full aspect-square" style={{ perspective: "1000px" }}>
              <motion.div
                className="relative w-full h-full cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* Front Side - Image */}
                <div
                  className="absolute inset-0"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  <Image
                    src="/BhanuImage.svg"
                    alt="Bhanuprasad Vepakayala"
                    width={400}
                    height={400}
                    className="relative z-10 w-full h-full aspect-square object-cover filter drop-shadow-2xl rounded-full border-4 border-white/20"
                    priority
                  />
                </div>

                {/* Back Side - LinkedIn Link */}
                <div
                  className="absolute inset-0 rounded-full border-4 flex items-center justify-center overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: theme === "dark"
                      ? "linear-gradient(135deg, rgba(10, 102, 194, 0.2) 0%, rgba(10, 102, 194, 0.05) 100%)"
                      : "linear-gradient(135deg, rgba(10, 102, 194, 0.15) 0%, rgba(10, 102, 194, 0.03) 100%)",
                    backdropFilter: "blur(20px)",
                    borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {/* Animated background circles */}
                  <motion.div
                    className="absolute w-32 h-32 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(10, 102, 194, 0.3) 0%, transparent 70%)",
                      top: "20%",
                      left: "20%",
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute w-24 h-24 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(10, 102, 194, 0.3) 0%, transparent 70%)",
                      bottom: "25%",
                      right: "25%",
                    }}
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative z-10 text-center p-8">
                    <motion.a
                      href="https://www.linkedin.com/in/bhanu-prasad-vepakayala-117152267"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-6 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="relative"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-full blur-xl"
                          style={{ background: "#0A66C2" }}
                          animate={{
                            opacity: [0.5, 0.8, 0.5],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <FaLinkedin className="text-9xl relative z-10" style={{ color: "#0A66C2" }} />
                      </motion.div>
                      <div className="space-y-2">
                        <span className={`text-2xl font-bold block ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}>
                          Let's Connect
                        </span>
                        <span className={`text-sm font-medium block ${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}>
                          View my LinkedIn profile
                        </span>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 ${
            theme === "dark" ? "border-white/30" : "border-black/30"
          }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-1 h-3 rounded-full ${
              theme === "dark" ? "bg-white/60" : "bg-black/60"
            }`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

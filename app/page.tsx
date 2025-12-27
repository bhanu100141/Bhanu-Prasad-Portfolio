"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import TopNav from "@/components/TopNav";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/bhanu100141", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/bhanu-prasad-vepakayala-117152267", label: "LinkedIn" },
  ];

  return (
    <main className={`min-h-screen transition-colors ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <TopNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Mobile Footer - Follow Me Section */}
      <footer className={`lg:hidden py-6 border-t transition-colors ${
        theme === "dark" ? "bg-black border-white/10" : "bg-white border-gray-200"
      }`}>
        <div className="flex flex-col items-center gap-4">
          <p className={`text-sm font-medium ${
            theme === "dark" ? "text-white/60" : "text-black/60"
          }`}>
            Follow Me
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-2xl transition-colors ${
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
          </div>
        </div>
      </footer>
    </main>
  );
}

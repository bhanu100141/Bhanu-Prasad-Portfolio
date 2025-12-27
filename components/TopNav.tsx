"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

export default function TopNav() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 border-b transition-colors ${
        theme === "dark"
          ? "bg-black/80 backdrop-blur-lg border-white/10"
          : "bg-white/80 backdrop-blur-lg border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl md:text-2xl font-bold uppercase tracking-wider ${theme === "dark" ? "text-white" : "text-black"}`}
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Bhanuprasad
        </motion.div>

        {/* Right side - Nav items and Theme toggle */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Nav Items - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`text-sm font-medium transition-colors ${
                  theme === "dark"
                    ? "text-white/70 hover:text-white"
                    : "text-black/70 hover:text-black"
                }`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors ${
              theme === "dark"
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </motion.button>

          {/* Hamburger Menu - Mobile */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden text-xl ${theme === "dark" ? "text-white" : "text-black"}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${
              theme === "dark" ? "bg-black/95" : "bg-white/95"
            }`}
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base transition-colors ${
                    theme === "dark"
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-600"
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

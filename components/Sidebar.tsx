"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaHome, FaUser, FaCode, FaBriefcase, FaPhone, FaChevronDown } from "react-icons/fa";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", icon: FaHome, label: "Home", href: "#home" },
    { id: "about", icon: FaUser, label: "About", href: "#about" },
    { id: "skills", icon: FaCode, label: "Skills", href: "#skills" },
    { id: "projects", icon: FaBriefcase, label: "Projects", href: "#projects" },
    { id: "contact", icon: FaPhone, label: "Contact", href: "#contact" },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-20 bg-black z-50 flex flex-col items-center py-8 shadow-2xl border-r border-gray-800"
    >
      {/* Logo/Initials */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mb-12 cursor-pointer backdrop-blur-sm border border-white/20"
      >
        <span className="text-2xl font-bold text-white">BP</span>
      </motion.div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-6">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.id}
              href={item.href}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.2, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveSection(item.id)}
              className={`relative w-12 h-12 flex items-center justify-center rounded-lg transition-all group ${
                activeSection === item.id
                  ? "bg-white/20 shadow-lg"
                  : "hover:bg-white/10"
              }`}
              title={item.label}
            >
              <Icon className="text-2xl text-white" />

              {/* Tooltip */}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute left-16 bg-white text-black px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-lg"
              >
                {item.label}
              </motion.span>
            </motion.a>
          );
        })}
      </nav>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-white/60 text-2xl cursor-pointer"
      >
        <FaChevronDown />
      </motion.div>
    </motion.div>
  );
}

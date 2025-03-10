"use client"; // Pastikan ini ada jika pakai Next.js 14+

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Hindari hydration error

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Tentang", id: "about" },
    { label: "Proyek", id: "projects" },
    { label: "Kontak", id: "contact" },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  if (!isClient) return null; // Hindari render di server

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-gray-800">Heri&apos;s Portfolio</h1>

        {/* Burger Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-gray-600">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className="relative px-3 py-1 hover:text-blue-600 transition-colors duration-300 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
                    after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Navigation - Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-16 left-0 w-full bg-white shadow-md"
          >
            <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className="text-lg font-medium hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

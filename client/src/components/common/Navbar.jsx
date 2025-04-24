import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Github, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}>
            <Code2 className="text-blue-400" />
            <span className="text-xl font-bold">RepoCraft</span>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {["Features", "How it works", "Examples", "Docs"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-blue-400 transition-colors text-sm font-medium"
                whileHover={{ y: -2 }}>
                {item}
              </motion.a>
            ))}
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}>
              <Github className="hover:text-blue-400 transition-colors" />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-gray-800 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Features", "How it works", "Examples", "Docs"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">
              <Github className="mr-2" size={18} /> GitHub
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

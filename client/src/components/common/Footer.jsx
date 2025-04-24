import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="text-blue-400" />
              <span className="text-xl font-bold">RepoCraft</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-md">
              RepoCraft helps developers create professional documentation and
              visually appealing banners for GitHub repositories.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -3, color: "#1DA1F2" }}
                className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, color: "#0A66C2" }}
                className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, color: "#f5f5f5" }}
                className="text-gray-400 hover:text-white">
                <Github size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              {["Features", "Pricing", "Documentation", "Changelog"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Blog", "Examples", "API", "GitHub"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} RepoCraft. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

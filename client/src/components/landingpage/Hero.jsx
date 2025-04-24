import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Search } from "lucide-react";
import RepoForm from "./RepoForm";

const Hero = () => {
  return (
    <motion.section
      className="px-6 py-32 mx-auto max-w-6xl text-center pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Build <span className="text-blue-400">Better</span> Documentation{" "}
          <br />
          for Your Code
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          RepoCraft uses AI to transform your GitHub repositories into
          professionally documented projects with eye-catching banners in
          seconds.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}>
        <RepoForm />
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}>
        <p className="text-gray-500 mb-4">Trusted by developers from</p>
        <div className="flex flex-wrap justify-center gap-8 opacity-70">
          {["GitHub", "Vercel", "Netlify", "Digital Ocean", "AWS"].map(
            (company) => (
              <span key={company} className="text-sm font-mono text-gray-400">
                {company}
              </span>
            )
          )}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

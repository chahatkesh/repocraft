import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Enter Your Repository",
    description:
      "Simply paste your GitHub repository URL (username/repository) into the input field.",
  },
  {
    number: "02",
    title: "AI Analysis",
    description:
      "Our AI engine analyzes your code structure, metadata, and repository information.",
  },
  {
    number: "03",
    title: "Generate Documentation",
    description:
      "We create a comprehensive README and custom banner based on your project.",
  },
  {
    number: "04",
    title: "Customize & Export",
    description:
      "Review, edit, and export the generated files directly to your repository.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            RepoCraft streamlines your documentation workflow in four simple
            steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/20 via-blue-400/50 to-blue-600/20 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}>
                <motion.div
                  className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold mb-6"
                  whileHover={{ scale: 1.1 }}>
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}>
          <motion.a
            href="#"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Try it now <ArrowRight size={16} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

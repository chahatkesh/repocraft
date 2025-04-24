import React from "react";
import { motion } from "framer-motion";

import {
  FileText,
  Image,
  GitBranch,
  Code2,
  Palette,
  Zap,
  Shield,
} from "lucide-react";
import { FaStar } from "react-icons/fa";

const features = [
  {
    icon: <FileText className="text-blue-400" size={24} />,
    title: "Smart README Generation",
    description:
      "AI-powered README creation based on your codebase structure and metadata",
  },
  {
    icon: <Image className="text-blue-400" size={24} />,
    title: "Project Banners",
    description:
      "Eye-catching project banners that reflect your code's purpose and tech stack",
  },
  {
    icon: <FaStar className="text-blue-400" size={24} />,
    title: "Badge Integration",
    description:
      "Automatic GitHub metrics and status badges to showcase project health",
  },
  {
    icon: <GitBranch className="text-blue-400" size={24} />,
    title: "Direct Publishing",
    description:
      "Push your README and banners directly to your GitHub repository",
  },
  {
    icon: <Code2 className="text-blue-400" size={24} />,
    title: "Code Analysis",
    description:
      "Intelligent parsing of your codebase to identify key components and features",
  },
  {
    icon: <Palette className="text-blue-400" size={24} />,
    title: "Customizable Themes",
    description: "Choose from multiple themes to match your project's branding",
  },
  {
    icon: <Zap className="text-blue-400" size={24} />,
    title: "Fast Processing",
    description: "Get your documentation in seconds, not hours",
  },
  {
    icon: <Shield className="text-blue-400" size={24} />,
    title: "Private Repo Support",
    description: "Works with both public and private repositories",
  },
];

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
      }}>
      <div className="bg-gray-700/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
};

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Developer-Focused Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built by developers for developers. RepoCraft helps you present your
            code in the best light without the documentation hassle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

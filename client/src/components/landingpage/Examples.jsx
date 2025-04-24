import React from "react";
import { motion } from "framer-motion";
import { Code, Github, ExternalLink } from "lucide-react";

const exampleProjects = [
  {
    title: "NestJS API Boilerplate",
    description:
      "A fully-featured NestJS REST API template with authentication, TypeORM, and comprehensive documentation",
    image:
      "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    repoUrl: "#",
  },
  {
    title: "React Dashboard",
    description:
      "A modern admin dashboard built with React, Tailwind CSS and Chart.js with dark mode support",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    repoUrl: "#",
  },
  {
    title: "ML Model Deployment",
    description:
      "A machine learning model deployment template using FastAPI and Docker with automated CI/CD",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    repoUrl: "#",
  },
];

const Examples = () => {
  return (
    <section id="examples" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Examples
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how RepoCraft transforms ordinary repositories into
            professionally documented projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exampleProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.2)",
              }}>
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-gray-700 p-4 flex justify-between">
                <motion.a
                  href={project.repoUrl}
                  className="flex items-center text-sm text-gray-400 hover:text-blue-400"
                  whileHover={{ x: 2 }}>
                  <Github className="mr-1" size={16} />
                  View Repository
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;

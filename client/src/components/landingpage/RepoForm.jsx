import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Search } from "lucide-react";

const RepoForm = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!repoUrl.trim()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Processing repository:", repoUrl);

      // Here you would navigate to results page or show results
      // For now we just reset the form
      setRepoUrl("");
    } catch (error) {
      console.error("Error processing repository:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mb-8"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <div className="relative flex items-center shadow-lg shadow-blue-500/10">
        <Github className="absolute left-4 text-gray-500" size={20} />
        <input
          type="text"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          placeholder="username/repository"
          className="w-full pl-12 pr-4 py-4 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <motion.button
          type="submit"
          className={`bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-r-lg transition-colors flex items-center ${
            isLoading ? "opacity-80" : ""
          }`}
          disabled={isLoading}
          whileTap={{ scale: 0.95 }}>
          {isLoading ? (
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
          ) : (
            <Search className="mr-2" size={20} />
          )}
          {isLoading ? "Processing..." : "Generate"}
        </motion.button>
      </div>
      <p className="text-gray-500 text-sm mt-2 text-left pl-4">
        Example: chahatkesh/repocraft
      </p>
    </motion.form>
  );
};

export default RepoForm;

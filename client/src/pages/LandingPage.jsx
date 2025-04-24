import React from "react";

// Importing components for the landing page
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

// Importing specific sections of the landing page
import Hero from "../components/landingpage/Hero";
import FeatureSection from "../components/landingpage/FeatureSection";
import HowItWorks from "../components/landingpage/HowItWorks";
import Examples from "../components/landingpage/Examples";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <Hero />
      <FeatureSection />
      <HowItWorks />
      <Examples />
      <Footer />
    </div>
  );
};

export default LandingPage;

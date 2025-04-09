// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../components/Herosection';
import ResumeUploadSection from '../components/Resumeuploadsection';
import FeaturesSection from '../components/FeatureSection';
import CTASection from '../components/CTAsection';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Resume Upload Section */}
      <ResumeUploadSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default HomePage;
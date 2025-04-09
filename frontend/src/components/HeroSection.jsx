// src/components/HeroSection.js
import React from "react";

function HeroSection() {
  return (
    <section className="py-12 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">How do I make sure my resume passes the ATS resume test?</h1>
      <p className="text-lg mb-8">
        Here are some guidelines you should follow to ensure your resume is readable and scanned correctly by applicant tracking systems, or ATS. This is a great start - well done!
      </p>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Get your Free ATS resume scan
      </button>
    </section>
  );
}

export default HeroSection;
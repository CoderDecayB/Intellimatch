// src/components/FeaturesSection.js
import React from "react";

function FeaturesSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Feature 1 */}
        <div className="bg-[#1A202C] p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">Score My Resume</h2>
          <p className="text-gray-300">
            Get a free expert resume review, instantly.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#1A202C] p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">Targeted Resume</h2>
          <p className="text-gray-300">
            Tailor your resume to a job description in seconds.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-[#1A202C] p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">LinkedIn Review</h2>
          <p className="text-gray-300">
            Get personalized feedback on your LinkedIn profile.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-[#1A202C] p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">Cover Letter Generator</h2>
          <p className="text-gray-300">
            Generate personalized cover letters using AI.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
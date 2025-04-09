// src/components/CTASection.js
import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-gray-800 text-white py-12">
      <div className="container px-6 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center">
          Ready to Streamline Your Hiring Process?
        </h2>
        <p className="mb-8 text-center">
          Sign up now and experience the power of Intellimatch.
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600">
            Sign Up Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
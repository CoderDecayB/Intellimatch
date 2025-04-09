// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0D1117] text-gray-300 py-6">
      <div className="max-w-4xl mx-auto flex justify-between">
        {/* Left Side */}
        <div>
          <p>© 2025 Resume Worded. All rights reserved.</p>
        </div>

        {/* Right Side */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-500">
            Help center
          </a>
          <a href="#" className="hover:text-green-500">
            Get in touch
          </a>
          <a href="#" className="hover:text-green-500">
            For businesses
          </a>
          <a href="#" className="hover:text-green-500">
            Testimonials
          </a>
          <a href="#" className="hover:text-green-500">
            Privacy
          </a>
          <a href="#" className="hover:text-green-500">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
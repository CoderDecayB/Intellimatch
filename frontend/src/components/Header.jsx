// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-[#0D1117] px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/assets/intellimatch-logo.svg"
          alt="IntelliMatch Logo"
          className="h-8 w-auto"
        />
        <span className="text-xl font-bold text-white">IntelliMatch</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Link
          to="/contact-us"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-transparent rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Contact Us
        </Link>
        <Link
          to="/login"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-transparent rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-transparent rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Sign Up
        </Link>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-transparent rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}

export default Header;
// src/components/ResumeUpload.js
import React, { useState } from "react";

function ResumeUpload() {
  const [_, setFile] = useState(null);
  const [scanCount, setScanCount] = useState(0); // Track number of scans
  const [feedback, setFeedback] = useState(""); // AI feedback
  const [loading, setLoading] = useState(false); // Loading state
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false); // Upgrade prompt

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (scanCount >= 4) {
      setShowUpgradePrompt(true); // Show upgrade prompt if limit exceeded
      return;
    }

    setLoading(true); // Start loading
    setTimeout(() => {
      // Simulate AI processing (replace with actual API call later)
      setFeedback("Your resume is ATS-friendly and well-structured.");
      setLoading(false);
      setScanCount((prevCount) => prevCount + 1); // Increment scan count
    }, 2000);
  };

  return (
    <div className="bg-purple-900 text-white p-6 rounded shadow-lg max-w-md mx-auto mt-10">
      <div className="flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 17v2a2 2 0 002 2h12a2 2 0 002 -2v-2" />
          <polyline points="14 11 10 7 4 11" />
          <line x1="20" y1="11" x2="8" y2="11" />
        </svg>
        <span className="ml-2 text-sm">100% privacy</span>
      </div>
      <p className="text-2xl font-bold mb-2">Drop your resume here or choose a file.</p>
      <p className="text-gray-300">
        English resumes in PDF or DOCX only. Max 2MB file size.
      </p>
      {showUpgradePrompt && (
        <p className="text-red-500 mt-4">
          You've used all 4 free scans. Please upgrade to continue.
        </p>
      )}
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={handleFileChange}
        className="hidden"
        id="resume-upload"
        disabled={showUpgradePrompt} // Disable input if upgrade is needed
      />
      <label
        htmlFor="resume-upload"
        className={`block mt-4 cursor-pointer ${
          showUpgradePrompt ? "bg-gray-500" : "bg-green-500 hover:bg-green-700"
        } text-white font-bold py-2 px-4 rounded`}
      >
        {loading ? "Scanning..." : "Upload Resume"}
      </label>
      {feedback && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">AI Feedback:</h3>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;
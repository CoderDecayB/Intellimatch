// backend/utils/aiUtils.js
export const analyzeResumeWithAI = async (file) => {
  // Simulate AI analysis (replace with actual AI logic later)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        atsScore: Math.floor(Math.random() * 100), // Random ATS score
        readability: "Good",
        grammar: "No issues found",
        suggestions: ["Add more keywords", "Include quantifiable achievements"],
      });
    }, 2000); // Simulate 2-second processing time
  });
};
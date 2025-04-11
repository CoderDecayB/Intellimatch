// backend/controllers/resumeController.js
import User from "../models/user.js";
import { analyzeResumeWithAI } from "../utils/aiUtils.js";

// Simulate resume upload and analysis
export const uploadResume = async (req, res) => {
  try {
    const { email } = req.body; // Get user's email from request
    const file = req.file; // Uploaded file (using multer middleware)

    if (!email || !file) {
      return res.status(400).json({ error: "Email and file are required" });
    }

    // Find or create the user
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email });
    }

    // Check scan limit
    if (!user.isPaid && user.scanCount >= 4) {
      return res.status(403).json({
        error: "You've used all 4 free scans. Please upgrade.",
      });
    }

    // Simulate AI analysis
    const feedback = await analyzeResumeWithAI(file);

    // Update scan count
    user.scanCount += 1;
    await user.save();

    res.status(200).json({ message: "Resume analyzed successfully", feedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const analyzeResume = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "File is required" });
    }
    const feedback = await analyzeResumeWithAI(file);
    res.status(200).json({ message: "Resume analyzed successfully", feedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// backend/routes/resume.js
import express from "express";
import { uploadResume, analyzeResume } from "../controllers/resumeControllers.js";
import { checkScanLimit } from "../middlewares/authMiddleware.js";
import { testFunction } from "../controllers/test.js";
testFunction();
const router = express.Router();

// Upload and analyze resume
router.post("/upload", checkScanLimit, uploadResume);
router.post("/analyze", analyzeResume);

export default router;
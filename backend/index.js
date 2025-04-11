// backend/server.js
import dotenv from "dotenv";
dotenv.config(); // Must be first before any other imports

import express from "express";
import cors from "cors";
import resumeRoutes from "./routes/resume.js";
import connectDB from "./config/db.js"; // Import the database connection

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api", resumeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
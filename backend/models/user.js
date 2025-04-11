// backend/models/user.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    scanCount: { type: Number, default: 0 }, // Track free scans
    isPaid: { type: Boolean, default: false }, // Paid user flag
  },
  { timestamps: true } // Add createdAt and updatedAt fields
);

const User = mongoose.model("User", userSchema);

export default User;
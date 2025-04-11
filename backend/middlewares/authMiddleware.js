// backend/middlewares/authMiddleware.js
let scanCount = 0; // In-memory counter (replace with database later)

export const checkScanLimit = (req, res, next) => {
  if (scanCount >= 4) {
    return res.status(403).json({ error: "You've used all 4 free scans. Please upgrade." });
  }

  scanCount++; // Increment scan count
  next(); // Proceed to the next middleware/route
};
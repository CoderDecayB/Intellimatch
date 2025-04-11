// backend/config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to primary MongoDB...");
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected to primary: ${conn.connection.host}`);
  } catch (primaryError) {
    console.error("Primary connection failed, trying backup...");
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI_BACKUP, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`MongoDB connected to backup: ${conn.connection.host}`);
    } catch (backupError) {
      console.error("Both MongoDB connections failed:");
      console.error("Primary error:", primaryError.message);
      console.error("Backup error:", backupError.message);
      process.exit(1);
    }
  }
};

export default connectDB;

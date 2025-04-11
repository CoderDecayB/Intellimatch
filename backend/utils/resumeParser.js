// backend/utils/resumeParser.js
import pdfParse from "pdf-parse";
import mammoth from "mammoth";

// Function to parse resume based on file type
export const parseResume = async (file) => {
  try {
    const { originalname, buffer } = file;

    // Check file type and parse accordingly
    if (originalname.endsWith(".pdf")) {
      return await parsePDF(buffer);
    } else if (originalname.endsWith(".docx")) {
      return await parseDOCX(buffer);
    } else {
      throw new Error("Unsupported file format. Please upload a PDF or DOCX file.");
    }
  } catch (error) {
    console.error("Error parsing resume:", error.message);
    throw error;
  }
};

// Function to parse PDF files
const parsePDF = async (buffer) => {
  try {
    const data = await pdfParse(buffer);
    return data.text; // Extracted text from PDF
  } catch (error) {
    throw new Error("Failed to parse PDF file.");
  }
};

// Function to parse DOCX files
const parseDOCX = async (buffer) => {
  try {
    const result = await mammoth.extractRawText({ buffer });
    return result.value; // Extracted text from DOCX
  } catch (error) {
    throw new Error("Failed to parse DOCX file.");
  }
};